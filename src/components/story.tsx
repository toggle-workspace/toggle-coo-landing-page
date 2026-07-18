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
        <div className="relative flex min-h-100 flex-1 items-center overflow-hidden rounded-2xl">
          <img
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            src="/marketing/hero-video-bg.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />
          <div className="relative flex flex-col items-start gap-4 p-8 text-white">
            <div className="flex size-16 items-center justify-center rounded-full bg-[#eb332d] p-3">
              <img alt="" className="size-full" src="/marketing/icon-play.svg" />
            </div>
            <h3 className="text-3xl font-semibold">
              Driven by Strategy.
              <br />
              Focused on Results.
            </h3>
            <p>Watch a short video about our agency</p>
          </div>
        </div>
      </div>
    </section>
  );
}
