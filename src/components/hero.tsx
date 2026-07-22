import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GradientBackground } from "@/components/gradient-background";

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
    <section className="relative isolate w-full overflow-hidden bg-white lg:flex lg:min-h-[calc(100dvh-4rem)] lg:items-center">
      <GradientBackground />
      <div className="mx-auto flex max-w-325 flex-col items-center gap-6 px-6 pb-20 pt-20 text-center sm:pb-28 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
        {eyebrow && <p className="text-[#292b2c]">{eyebrow}</p>}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[#292b2c] md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg text-[#565b5d]">{description}</p>
        )}
        {actions.length > 0 && (
          <div className="mt-2 flex flex-col-reverse sm:flex-row items-center justify-center gap-4">
            {actions.map((action) => (
              <Button
                key={action.label}
                variant={
                  action.variant === "outline" ? "brand-outline" : "default"
                }
                size="xl"
                className="w-full sm:w-auto"
                nativeButton={false}
                render={<Link href={action.href} />}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
