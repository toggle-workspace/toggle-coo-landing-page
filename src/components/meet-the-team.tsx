import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

const ROW_ONE = [
  "https://framerusercontent.com/images/fBOi4Imm3fASs0DBBxcNtnaRCo.webp",
  "https://framerusercontent.com/images/jLMxwi1R8gzUyXiQp9F8rSWybs.webp",
  "https://framerusercontent.com/images/sZqcdkuGqdVzVKUqy0qLOErZsH0.webp",
  "https://framerusercontent.com/images/3lF5z4eGw5E4kl7ajdSQqp6I8.webp",
  "https://framerusercontent.com/images/paV51CBatHDTWa1vXat0wQDwyk.webp",
  "https://framerusercontent.com/images/e0Z1gw7iYDuGy3mNOuX01D6yXk.webp",
  "https://framerusercontent.com/images/zN9vsASmtubi69L2o3uAywLItAY.webp",
  "https://framerusercontent.com/images/ervRJBoJxwtCWuLCwJIXNs1dOk.webp",
  "https://framerusercontent.com/images/0gmlUq11uaT01IgiFs63enoNn0.webp",
];

const ROW_TWO = [
  "https://framerusercontent.com/images/9YhzPYrKWvb5tekqTwlo8sr6oUk.webp",
  "https://framerusercontent.com/images/aO7SMvat8WEhL0VBzPCgWglf3E.webp",
  "https://framerusercontent.com/images/8ez6XjYjzdsiY0ldNtGLUxR6Dc.webp",
  "https://framerusercontent.com/images/4la6PoTwhNJGRg4DUNNMElnToU.webp",
  "https://framerusercontent.com/images/u6IWBrBMtVceaTM67NyY75LduF0.webp",
  "https://framerusercontent.com/images/1erqJiHNe3lGaPhxWWhgFakYE.webp",
  "https://framerusercontent.com/images/oCkygQnyJwePA61aKoH2tz6FB0.webp",
];

const STATS = [
  { value: "20+", label: "Team members" },
  { value: "100+", label: "Products shipped" },
  { value: "$1B+", label: "Raised by our clients" },
];

function FaceSlider({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 17.5%, black 82.5%, transparent 100%)",
      }}
    >
      <InfiniteSlider gap={6} reverse={reverse}>
        {images.map((src, i) => (
          <div key={i} className="size-40 shrink-0 overflow-hidden rounded-xl">
            <img src={src} alt="" className="size-full object-cover" />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}

export function MeetTheTeam() {
  return (
    <section className="overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            One senior team for design and build
          </p>
          <h2 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Meet the team
          </h2>
          <p className="max-w-xl text-base text-muted-foreground">
            You don&apos;t need to manage an army of designers and developers.
            We bring the right people together and move fast.
          </p>
        </div>
      </div>

      {/* Sliders */}
      <div className="flex flex-col gap-2 max-w-6xl mx-auto">
        <FaceSlider images={[...ROW_ONE, ...ROW_ONE, ...ROW_ONE]} />
        <FaceSlider images={[...ROW_TWO, ...ROW_TWO, ...ROW_TWO]} reverse />
      </div>

      {/* Stats + CTA */}
      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12">
          <div className="flex gap-12">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-4xl md:text-5xl font-semibold">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <Button
            className="rounded-lg px-6 py-3"
            style={{ backgroundColor: "rgb(255, 74, 3)" }}
          >
            Work with our team
          </Button>
        </div>
      </div>
    </section>
  );
}
