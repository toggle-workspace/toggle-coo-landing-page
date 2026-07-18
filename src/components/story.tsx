import { VideoPanel } from "@/components/video-panel";

export function Story() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-10 px-6 lg:flex-row lg:px-8">
        <div className="flex flex-1 flex-col gap-6">
          <h2 className="text-2xl leading-snug font-medium text-[#292b2c] lg:text-3xl">
            We&rsquo;re a team of strategists, creatives, and marketers
            working together to produce standout content and ensure it
            reaches the right audience.
          </h2>
          <a
            href="/about"
            className="w-fit border-b-2 border-[#eb332d] pb-1.5 text-base font-semibold text-[#292b2c]"
          >
            More about us
          </a>
        </div>
        <VideoPanel image="/marketing/hero-video-bg.jpg" />
      </div>
    </section>
  );
}
