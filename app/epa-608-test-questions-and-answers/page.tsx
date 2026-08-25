import type { Metadata } from "next";
import { ResourcePage } from "@/app/_components/resource-page";
import { resourcePages } from "@/data/resources";

const config = resourcePages.questions;
export const metadata: Metadata = { title: config.title, description: config.description, alternates: { canonical: config.path } };
export default function Page() { return <ResourcePage config={config} />; }

