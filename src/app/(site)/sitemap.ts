import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "../../../payload.config";

const SITE_URL = "https://toggle-coo.toggle.solutions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config });
  const [{ docs: services }, { docs: caseStudies }] = await Promise.all([
    payload.find({ collection: "services", limit: 0, depth: 0 }),
    payload.find({ collection: "case-studies", limit: 0, depth: 0 }),
  ]);

  const staticRoutes = ["", "/about", "/services", "/case-studies", "/contact"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
    }),
  );

  const serviceRoutes = services
    .filter((service) => service.slug)
    .map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified: new Date(service.updatedAt),
    }));

  const caseStudyRoutes = caseStudies
    .filter((study) => study.slug)
    .map((study) => ({
      url: `${SITE_URL}/case-studies/${study.slug}`,
      lastModified: new Date(study.updatedAt),
    }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
