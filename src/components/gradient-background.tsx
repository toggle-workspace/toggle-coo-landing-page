export function GradientBackground() {
  return (
    <>
      <img
        src="/marketing/hero-bg-gradient.svg"
        alt=""
        className="absolute inset-0 -z-20 size-full object-fill"
      />
      <img
        src="/marketing/hero-bg-lines-mask.svg"
        alt=""
        className="absolute inset-0 -z-20 size-full object-fill"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white from-[10%] to-transparent to-[70%]" />
    </>
  );
}
