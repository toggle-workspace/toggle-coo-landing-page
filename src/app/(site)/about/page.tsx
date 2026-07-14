import { PageHeader } from "@/components/pageheader";

export default async function Home() {
  return (
    <div>
      <PageHeader
        title="About"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
    </div>
  );
}
