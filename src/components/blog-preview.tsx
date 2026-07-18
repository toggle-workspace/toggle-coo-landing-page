import { BLOG_POSTS } from "@/data/blog-posts";

export function BlogPreview() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img alt="" className="size-3.5" src="/marketing/icon-bullet.svg" />
              <span className="font-semibold text-[#292b2c]">From our blog</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#292b2c] md:text-5xl">
              Latest insights from our blog
            </h2>
          </div>
          <a
            href="#"
            className="w-fit border-b-2 border-[#eb332d] pb-1.5 text-base font-semibold text-[#292b2c]"
          >
            View all articles
          </a>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <a
              href="#"
              key={post.title}
              className="group relative flex min-h-80 flex-col justify-end overflow-hidden rounded-lg p-8"
            >
              <img
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={post.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />
              <div className="relative flex flex-col gap-4 text-white">
                <p className="text-sm">
                  <span className="text-[#ff584d]">{post.tags.join(", ")}</span>
                  {" | "}
                  {post.date}
                </p>
                <h3 className="text-xl font-semibold">{post.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
