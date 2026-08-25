import { ResourcePage } from "@/app/_components/resource-page";
import { createPageMetadata } from "@/app/_lib/metadata";
import { resourcePages } from "@/data/resources";

const config = resourcePages.type2Guide;
export const metadata = createPageMetadata(config);
export default function Page() { return <ResourcePage config={config} />; }
