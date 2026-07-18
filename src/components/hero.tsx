import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/eyebrow";

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
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: HeroAction[];
  /** "center" matches the homepage-style landing hero; "left" matches an inner-page header. */
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <section className="w-full bg-white">
      <div
        className={cn(
          "mx-auto flex max-w-325 flex-col gap-6 px-6 pb-16 pt-16 lg:px-8 lg:pt-24",
          centered && "items-center text-center",
        )}
      >
        {eyebrow &&
          (centered ? (
            <p className="text-[#292b2c]">{eyebrow}</p>
          ) : (
            <Eyebrow>{eyebrow}</Eyebrow>
          ))}
        <h1
          className={cn(
            "max-w-4xl text-4xl font-bold tracking-tight text-[#292b2c] md:text-6xl",
            centered && "lg:text-7xl",
          )}
        >
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg text-[#565b5d]">{description}</p>
        )}
        {actions.length > 0 && (
          <div
            className={cn(
              "mt-2 flex flex-wrap items-center gap-4",
              centered && "justify-center",
            )}
          >
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
