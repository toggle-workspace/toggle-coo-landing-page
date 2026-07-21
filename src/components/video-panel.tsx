import Image from "next/image";

export function VideoPanel({
  image,
  title = (
    <>
      Driven by Strategy.
      <br />
      Focused on Results.
    </>
  ),
  description = "Watch a short video about our agency",
}: {
  image: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-100 flex-1 items-center overflow-hidden rounded-2xl">
      <Image alt="" fill className="object-cover" src={image} />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/15" />
      <div className="relative flex flex-col items-start gap-4 p-8 text-white">
        <div className="flex size-16 items-center justify-center rounded-full bg-[#eb332d] p-3">
          <img alt="" className="size-full" src="/marketing/icon-play.svg" />
        </div>
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
