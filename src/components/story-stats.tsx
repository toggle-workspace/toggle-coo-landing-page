import { VideoPanel } from "@/components/video-panel";

const STATS = [
  { value: "15+", label: "Years of marketing experience" },
  { value: "100+", label: "Successful cases" },
];

export function StoryStats() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-10 px-6 lg:flex-row lg:items-stretch lg:px-8">
        <div className="flex flex-1 flex-col justify-center gap-8">
          <h2 className="text-3xl font-semibold text-[#292b2c] md:text-4xl">
            We believe marketing should deliver more than promises
          </h2>
          <p className="text-[#565b5d]">
            Over the years, our team of strategists, creatives, and marketers
            has worked with brands of all sizes to build meaningful
            connections with their audiences, grow their businesses, and
            deliver measurable results. Every project reflects our commitment
            to strategy, creativity, and long-term success.
          </p>
          <div className="flex flex-wrap gap-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-4xl font-semibold text-[#eb332d]">
                  {stat.value}
                </span>
                <p className="max-w-40 font-semibold text-[#292b2c]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <VideoPanel image="/about/video-bg.jpg" />
      </div>
    </section>
  );
}
