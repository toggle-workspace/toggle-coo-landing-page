import { getPayload } from "payload";
import config from "../../payload.config";
import type { CaseStudy } from "@/payload-types";

export type CaseStudySummary = {
  title: string;
  company: string;
  description: string;
  slug?: string;
};

function toSummary(doc: CaseStudy): CaseStudySummary {
  return {
    title: doc.name,
    company:
      (typeof doc.client === "object" ? doc.client?.company_name : undefined) ??
      "",
    description: doc.short_description ?? "",
    slug: doc.slug ?? undefined,
  };
}

export async function getAllCaseStudies(limit = 0): Promise<CaseStudySummary[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "case-studies",
    sort: "order",
    limit,
    depth: 1,
  });
  return docs.map(toSummary);
}

export async function getRelatedCaseStudies(
  serviceId: string,
  limit = 3,
): Promise<CaseStudySummary[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "case-studies",
    where: { services: { contains: serviceId } },
    limit,
    depth: 1,
  });
  return docs.map(toSummary);
}
