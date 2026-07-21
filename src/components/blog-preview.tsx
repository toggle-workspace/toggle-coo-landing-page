import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Eyebrow } from "@/components/eyebrow";
import { BLOG_POSTS } from "@/data/blog-posts";

type BlogPost = { title: string; tags: string[]; date: string; image: string };

export function BlogPreview({
  eyebrow = "From our blog",
  title = "Latest insights from our blog",
  linkLabel = "View all articles",
  linkHref = "#",
  posts = BLOG_POSTS,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  linkLabel?: string;
  linkHref?: string;
  posts?: BlogPost[];
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-325 px-6 lg:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-6">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-4xl font-semibold text-[#292b2c] md:text-5xl">
              {title}
            </h2>
          </div>
          <a
            href={linkHref}
            className="w-fit border-b-2 border-[#eb332d] pb-1.5 text-base font-semibold text-[#292b2c]"
          >
            {linkLabel}
          </a>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <a
              href="#"
              key={post.title}
              className="group relative flex min-h-80 flex-col justify-end overflow-hidden rounded-lg p-8"
            >
              <Image
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                src={post.image}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/15" />
              <div className="relative flex flex-col gap-4 text-white">
                <p className="text-sm">
                  <Badge variant="tag">{post.tags.join(", ")}</Badge>
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
