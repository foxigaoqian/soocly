import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, ".next/server/app");
const assetsDir = path.join(root, ".open-next/assets");
const outputDir = path.join(root, ".deploy");
await fs.mkdir(outputDir, { recursive: true });

const entries = [];
const mime = {
  ".css": "text/css; charset=utf-8", ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon",
  ".woff": "font/woff", ".woff2": "font/woff2", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml; charset=utf-8",
};

function addText(key, value, contentType, cacheControl) {
  entries.push({ key, value, metadata: { contentType, cacheControl } });
}

function addBinary(key, value, contentType, cacheControl) {
  entries.push({ key, value: value.toString("base64"), base64: true, metadata: { contentType, cacheControl } });
}

for (const name of (await fs.readdir(appDir)).filter((name) => name.endsWith(".html"))) {
  const stem = name.slice(0, -5);
  if (stem === "_global-error") continue;
  addText(`/__html/${stem}`, await fs.readFile(path.join(appDir, name), "utf8"), "text/html; charset=utf-8", "public, max-age=0, must-revalidate");
  try {
    const route = stem === "index" ? "/" : stem === "_not-found" ? "/404" : `/${stem}`;
    addText(`__rsc:${route}`, await fs.readFile(path.join(appDir, `${stem}.rsc`), "utf8"), "text/x-component; charset=utf-8", "public, max-age=0, must-revalidate");
  } catch {}
}

async function walk(directory) {
  for (const item of await fs.readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, item.name);
    if (item.isDirectory()) await walk(fullPath);
    else {
      const relative = path.relative(assetsDir, fullPath).split(path.sep).join("/");
      if (relative === "BUILD_ID") continue;
      const key = `/${relative}`;
      addBinary(key, await fs.readFile(fullPath), mime[path.extname(item.name).toLowerCase()] || "application/octet-stream", key.startsWith("/_next/static/") ? "public, max-age=31536000, immutable" : "public, max-age=3600");
    }
  }
}

await walk(assetsDir);

for (const asset of [
  { source: "sitemap.xml.body", key: "/sitemap.xml", type: "application/xml; charset=utf-8" },
  { source: "robots.txt.body", key: "/robots.txt", type: "text/plain; charset=utf-8" },
  { source: "icon.svg.body", key: "/icon.svg", type: "image/svg+xml" },
]) {
  addText(asset.key, await fs.readFile(path.join(appDir, asset.source), "utf8"), asset.type, "public, max-age=3600");
}

const chunkSize = 5;
const chunkFiles = [];
for (let index = 0; index < entries.length; index += chunkSize) {
  const filename = `kv-chunk-${Math.floor(index / chunkSize)}.json`;
  await fs.writeFile(path.join(outputDir, filename), JSON.stringify(entries.slice(index, index + chunkSize)));
  chunkFiles.push(filename);
}

const worker = String.raw`addEventListener("fetch", (event) => event.respondWith(handle(event.request)));
async function read(key, fallbackType, cacheTtl) {
  const result = await STATIC.getWithMetadata(key, { type: "arrayBuffer", cacheTtl });
  if (!result || result.value === null) return null;
  const metadata = result.metadata || {};
  return new Response(result.value, { headers: { "content-type": metadata.contentType || fallbackType, "cache-control": metadata.cacheControl || "public, max-age=0, must-revalidate", "x-content-type-options": "nosniff" } });
}
async function handle(request) {
  const url = new URL(request.url);
  let pathname = url.pathname;
  if (pathname === "/epa-608-practice-test" || pathname === "/epa-608-practice-test/") {
    const target = new URL("/", url); target.search = url.search; return Response.redirect(target.toString(), 308);
  }
  if (pathname.length > 1 && pathname.endsWith("/")) pathname = pathname.slice(0, -1);
  if (request.headers.get("rsc") === "1" || url.searchParams.has("_rsc")) {
    const rsc = await read("__rsc:" + pathname, "text/x-component; charset=utf-8", 60); if (rsc) return rsc;
  }
  if (pathname.includes(".")) {
    const asset = await read(pathname, "application/octet-stream", pathname.startsWith("/_next/static/") ? 86400 : 3600); if (asset) return asset;
  }
  const stem = pathname === "/" ? "index" : pathname.slice(1);
  const page = await read("/__html/" + stem, "text/html; charset=utf-8", 60); if (page) return page;
  const notFound = await read("/__html/_not-found", "text/html; charset=utf-8", 60);
  if (notFound) return new Response(notFound.body, { status: 404, headers: notFound.headers });
  return new Response("Not Found", { status: 404 });
}`;

await fs.writeFile(path.join(outputDir, "worker.js"), worker);
await fs.writeFile(path.join(outputDir, "manifest.json"), JSON.stringify({ entries: entries.length, chunks: chunkFiles }, null, 2));
console.log(JSON.stringify({ entries: entries.length, chunks: chunkFiles.length, outputDir }));
