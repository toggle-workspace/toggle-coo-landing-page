export function AboutHero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-6 px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
        <div className="flex items-center gap-2">
          <img alt="" className="size-4" src="/marketing/icon-bullet.svg" />
          <span className="font-semibold text-[#292b2c]">About us</span>
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[#292b2c] md:text-6xl">
          Building digital experiences that inspire and perform
        </h1>
        <p className="max-w-2xl text-lg text-[#565b5d]">
          Explore our values, philosophy, and approach that guide every
          project and help our clients build stronger, lasting brands.
        </p>
      </div>
    </section>
  );
}
