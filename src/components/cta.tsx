import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function CTA({
  title = "Call to Action",
  description = "Try our service free for 7 days. No credit card required.",
  buttonLabel = "Start free trial",
  buttonHref = "/contact",
  footnote,
}: {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  footnote?: React.ReactNode;
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center md:py-28">
        <h2 className="text-3xl font-semibold tracking-tight text-[#292b2c] text-balance md:text-6xl">
          {title}
        </h2>
        <p className="max-w-xl text-base text-[#565b5d] md:text-lg">
          {description}
        </p>
        <a
          href={buttonHref}
          className={cn(
            buttonVariants(),
            "h-fit rounded-full bg-[#eb332d] px-8 py-5 text-base font-semibold hover:bg-[#eb332d]/90",
          )}
        >
          {buttonLabel}
        </a>
        {footnote && <p className="text-sm text-[#889091]">{footnote}</p>}
      </div>
    </section>
  );
}
