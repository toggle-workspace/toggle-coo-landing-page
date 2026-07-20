import { Card, CardContent } from "@/components/ui/card";

export function CaseStudyCard({
  logo,
  title,
  industry,
  href,
}: {
  logo?: string;
  title: string;
  industry?: string;
  href: string;
}) {
  return (
    <a href={href} className="group block">
      <Card variant="default" className="border-transparent rounded-none">
        <CardContent className="p-0">
          <div className="flex h-45 items-center justify-center bg-[#f2f3f3] p-8">
            {logo && (
              <img
                alt={`${title} logo`}
                className="max-h-full max-w-full object-contain"
                src={logo}
              />
            )}
          </div>
          <div className="flex flex-col gap-1 py-6">
            <h3 className="text-xl font-semibold text-[#292b2c]">{title}</h3>
            {industry && <p className="text-sm text-[#889091]">{industry}</p>}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
