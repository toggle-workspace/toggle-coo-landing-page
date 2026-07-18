import { TextLink } from "@/components/ui/text-link";
import { Eyebrow } from "@/components/eyebrow";

type IconFeatureGridItem = {
  icon: string | React.ReactNode;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export function IconFeatureGrid({
  eyebrow = "What we do",
  title = "We do marketing that attracts, engages, converts",
  items = [],
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  items?: IconFeatureGridItem[];
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-325 px-6 lg:px-8">
        <div className="mb-14">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 className="mb-14 max-w-2xl text-4xl font-semibold text-[#292b2c] md:text-5xl">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="flex gap-7">
              {typeof item.icon === "string" ? (
                <img alt="" className="size-14 shrink-0" src={item.icon} />
              ) : (
                item.icon
              )}
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-[#292b2c]">
                  {item.title}
                </h3>
                <p className="text-[#565b5d]">{item.description}</p>
                {item.href && (
                  <TextLink href={item.href} className="pb-1 text-sm">
                    {item.linkLabel ?? "Learn more"}
                  </TextLink>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
