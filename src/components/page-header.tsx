import { Eyebrow } from "@/components/eyebrow";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-325 flex-col gap-6 px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[#292b2c] md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg text-[#565b5d]">{description}</p>
        )}
      </div>
    </section>
  );
}
