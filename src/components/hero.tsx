import { buttonVariants } from "@/components/ui/button";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
};

export function Hero({
  eyebrow,
  title,
  description,
  actions = [],
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: HeroAction[];
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-325 flex-col items-center gap-6 px-6 pb-16 pt-16 text-center lg:px-8 lg:pt-24">
        {eyebrow && <p className="text-[#292b2c]">{eyebrow}</p>}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[#292b2c] md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg text-[#565b5d]">{description}</p>
        )}
        {actions.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={buttonVariants({
                  variant:
                    action.variant === "outline" ? "brand-outline" : "brand",
                  size: "pill",
                })}
              >
                {action.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
