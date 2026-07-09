"use client";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";
import { RichText } from "@payloadcms/richtext-lexical/react";

const SERVICES = [
  {
    num: "01",
    title: "Brand Identity",
    video:
      "https://pub-bde3b88e42a6495691f392c8faa067f8.r2.dev/shot-6-mar_web.mp4",
    description:
      "We've built brands for companies that went on to raise tens of millions and reach millions of users. The work shows up everywhere, product, marketing site, app screens, pitch decks, investor updates, paid campaigns, app store listings. Not a logo in a zip file, a system that makes every touchpoint look like the same company built it.",
    bullets: [
      "Logo & visual identity",
      "Brand guidelines & systems",
      "Naming & verbal identity",
      "Social & content templates",
      "Pitch decks & investor collateral",
      "Brand strategy & positioning",
    ],
    cta: {
      label: "Explore our branding process →",
      href: "/services/brand-identity",
    },
  },
  {
    num: "02",
    title: "Websites",
    video:
      "https://pub-bde3b88e42a6495691f392c8faa067f8.r2.dev/ALL_IN_ONE_PLACE_web.mp4",
    description:
      "We've shipped 350+ sites, from first launches to full rebrands and replatforms. Designed and built by one team, no handoff, no waiting on dev, no round-tripping between Figma and Slack. The site goes live looking exactly like it looked in the comp.",
    bullets: [
      "Marketing & company websites",
      "Landing pages & campaign sites",
      "Webflow & Framer development",
      "CMS setup & content architecture",
      "SEO-ready page structure",
      "Responsive & mobile-first design",
    ],
    cta: {
      label: "Explore our website process →",
      href: "/services/website-design",
    },
  },
  {
    num: "03",
    title: "Product Design",
    video:
      "https://framerusercontent.com/assets/SFmGHK2rjcCJ7MNd4GCd8gdaQdY.mp4",
    description:
      "Most design agencies hand you files. We hand you products. We sit inside your workflow, work with your engineers, and ship interfaces that are dev-ready on delivery, not 'almost there, just needs a few tweaks.' From early MVP through scaled product, what we ship is what your users see.",
    bullets: [
      "UI & UX design",
      "MVP & prototype design",
      "Design systems & component libraries",
      "User flows & wireframing",
      "Mobile & responsive design",
      "Usability testing & iteration",
    ],
    cta: {
      label: "Explore our product process →",
      href: "/services/product-design",
    },
  },
  {
    num: "04",
    title: "Motion & Video",
    video:
      "https://pub-bde3b88e42a6495691f392c8faa067f8.r2.dev/Shot-3-feb_web.mp4",
    description:
      "The stuff that stops the scroll and sells the product before anyone reads a word. Launch videos, app reveals, product walkthroughs, social cuts, micro-interactions, the layer between 'nice website' and 'I need to talk to these people.'",
    bullets: [
      "Product launch videos",
      "Explainer & demo videos",
      "3D design & rendering",
      "UI micro-interactions & animations",
      "Lottie & web animations",
      "Social video & ad creative",
    ],
    cta: {
      label: "Help me with a launch video →",
      href: "/services/motion-design",
    },
  },
  {
    num: "05",
    title: "Development",
    video:
      "https://pub-bde3b88e42a6495691f392c8faa067f8.r2.dev/shot-4-feb (1).mp4",
    description:
      "We build what we design. Same team, same Slack, same week. No outsourced dev shop, no surprise technical limitations halfway through the project. What we design is what we can code, from a marketing site to a full product MVP.",
    bullets: [
      "Custom web applications",
      "Front-end development",
      "Back-end development & infrastructure",
      "AI integrations & workflows",
      "API integrations & third-party tools",
      "Performance optimization & QA",
    ],
    cta: { label: "Build my product →", href: "/services/nextjs-development" },
  },
];

const TOOL_LOGOS = [
  <svg
    key="webflow"
    viewBox="0 0 68.633 42.188"
    className="h-6 w-auto"
    aria-hidden="true"
  >
    <path
      d="M 68.633 0 L 46.733 42.188 L 26.164 42.188 L 35.329 24.704 L 34.917 24.704 C 27.356 34.376 16.074 40.745 0 42.188 L 0 24.947 C 0 24.947 10.284 24.346 16.329 18.084 L 0 18.084 L 0 0 L 18.351 0 L 18.351 14.874 L 18.763 14.872 L 26.261 0 L 40.142 0 L 40.142 14.779 L 40.554 14.779 L 48.332 0 Z"
      fill="currentColor"
    />
  </svg>,
  <svg
    key="figma"
    viewBox="0 0 16.685 24"
    className="h-6 w-auto"
    aria-hidden="true"
  >
    <path
      d="M 12.195 8.981 L 7.607 8.981 L 7.607 0 L 12.195 0 C 14.671 0 16.685 2.014 16.685 4.49 C 16.685 6.966 14.671 8.981 12.195 8.981 Z M 9.078 7.51 L 12.195 7.51 C 13.86 7.51 15.214 6.155 15.214 4.491 C 15.214 2.827 13.859 1.472 12.195 1.472 L 9.078 1.472 Z M 9.078 8.981 L 4.491 8.981 C 2.015 8.981 0.001 6.967 0.001 4.491 C 0.001 2.015 2.015 0 4.491 0 L 9.079 0 L 9.079 8.981 Z M 4.491 1.471 C 2.826 1.471 1.472 2.826 1.472 4.49 C 1.472 6.154 2.826 7.51 4.491 7.51 L 7.608 7.51 L 7.608 1.471 Z M 9.078 16.49 L 4.491 16.49 C 2.015 16.49 0.001 14.476 0.001 12 C 0.001 9.524 2.015 7.51 4.491 7.51 L 9.079 7.51 L 9.079 16.49 Z M 4.491 8.981 C 2.826 8.981 1.472 10.336 1.472 12 C 1.472 13.664 2.827 15.019 4.491 15.019 L 7.608 15.019 L 7.608 8.981 Z M 4.515 24 C 2.026 24 0 21.986 0 19.51 C 0 17.034 2.014 15.02 4.49 15.02 L 9.078 15.02 L 9.078 19.461 C 9.078 21.964 7.031 24 4.515 24 Z M 4.491 16.49 C 2.825 16.492 1.474 17.843 1.472 19.509 C 1.472 21.174 2.837 22.528 4.516 22.528 C 6.221 22.528 7.609 21.152 7.609 19.46 L 7.609 16.49 Z M 12.195 16.49 L 12.097 16.49 C 9.621 16.49 7.607 14.476 7.607 12 C 7.607 9.524 9.621 7.51 12.097 7.51 L 12.195 7.51 C 14.671 7.51 16.685 9.524 16.685 12 C 16.685 14.476 14.671 16.49 12.195 16.49 Z M 12.098 8.981 C 10.433 8.981 9.079 10.336 9.079 12 C 9.079 13.664 10.434 15.019 12.098 15.019 L 12.196 15.019 C 13.861 15.019 15.215 13.664 15.215 12 C 15.215 10.336 13.86 8.981 12.196 8.981 Z"
      fill="currentColor"
    />
  </svg>,
  <svg
    key="framer"
    viewBox="0 0 24 14.97"
    className="h-6 w-auto"
    aria-hidden="true"
  >
    <path
      d="M 24 0 L 16.342 14.97 L 9.149 14.97 L 12.354 8.766 L 12.21 8.766 C 9.566 12.198 5.621 14.458 0 14.97 L 0 8.852 C 0 8.852 3.596 8.639 5.71 6.417 L 0 6.417 L 0 0 L 6.417 0 L 6.417 5.278 L 6.561 5.277 L 9.183 0 L 14.037 0 L 14.037 5.244 L 14.181 5.244 L 16.901 0 Z"
      fill="currentColor"
    />
  </svg>,
  <svg
    key="linear"
    viewBox="0 0 39.081 59"
    className="h-6 w-auto"
    aria-hidden="true"
  >
    <path
      d="M 0 0 L 39.081 0 L 39.081 19.667 L 19.541 19.667 Z M 0 19.667 L 19.541 19.667 L 39.081 39.333 L 0 39.333 Z M 0 39.333 L 19.541 39.333 L 19.541 59 Z"
      fill="currentColor"
    />
  </svg>,
  <svg
    key="notion"
    viewBox="0 0 46 46"
    className="h-6 w-auto"
    aria-hidden="true"
  >
    <path
      d="M 35.775 42.125 C 31.996 44.657 27.549 46.006 23 46 C 10.306 46 0 35.694 0 23 C 0 10.306 10.306 0 23 0 C 35.694 0 46 10.306 46 23 C 46 29.867 42.983 36.035 38.205 40.252 L 17.67 13.8 L 13.8 13.8 L 13.8 32.192 L 16.895 32.192 L 16.895 17.731 Z M 29.388 25.77 L 32.455 29.72 L 32.455 13.8 L 29.388 13.8 Z"
      fill="currentColor"
    />
  </svg>,
  <svg
    key="react"
    viewBox="0 0 50 44.888"
    className="h-6 w-auto"
    aria-hidden="true"
  >
    <path
      d="M 29.646 22.449 C 29.646 25.042 27.561 27.144 24.99 27.145 C 22.417 27.145 20.331 25.043 20.331 22.449 C 20.331 19.857 22.416 17.755 24.988 17.754 C 27.56 17.754 29.646 19.856 29.646 22.449 Z M 35.162 0 C 32.358 0 28.69 2.016 24.979 5.507 C 21.271 2.035 17.6 0.042 14.798 0.042 C 13.944 0.042 13.167 0.238 12.494 0.626 C 9.629 2.292 8.988 7.481 10.467 13.993 C 4.125 15.967 0 19.123 0 22.449 C 0 25.788 4.146 28.953 10.506 30.912 C 9.04 37.45 9.694 42.647 12.565 44.31 C 13.231 44.703 14.002 44.888 14.86 44.888 C 17.663 44.888 21.333 42.872 25.044 39.378 C 28.752 42.851 32.423 44.844 35.225 44.844 C 36.079 44.844 36.856 44.655 37.529 44.266 C 40.392 42.603 41.035 37.414 39.556 30.9 C 45.875 28.943 50 25.78 50 22.449 C 50 19.11 45.854 15.946 39.494 13.982 C 40.96 7.451 40.306 2.25 37.435 0.584 C 36.741 0.191 35.957 -0.011 35.16 0 Z"
      fill="currentColor"
    />
  </svg>,
];

type PayloadService = {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description: any; // Lexical JSON
};

export function Services({ payload = [] }: { payload?: PayloadService[] }) {
  const services = SERVICES.map((s, i) =>
    payload[i] ? { ...s, title: payload[i].title, payloadDescription: payload[i].description } : s,
  );
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            how we help
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Support for every stage
          </h2>
          <p className="max-w-xl text-base text-muted-foreground">
            Bring us in when your idea, product, website, or brand needs to feel
            sharper, clearer, and ready for what comes next.
          </p>
        </div>

        {/* Accordion — shadcn, single open, first item open by default */}
        <Accordion
          multiple={false}
          defaultValue={["01"]}
          className="border-b border-border"
        >
          {services.map((service) => (
            <AccordionItem
              key={service.num}
              value={service.num}
              className="border-t border-border border-b-0"
            >
              <AccordionTrigger
                className={cn(
                  "items-center hover:no-underline py-6 gap-6",
                  "**:data-[slot=accordion-trigger-icon]:hidden",
                )}
              >
                <span className="w-12 shrink-0 text-3xl font-semibold leading-none tracking-tight text-muted-foreground/60 md:text-[42px]">
                  {service.num}
                </span>
                <h3 className="flex-1 text-left text-3xl font-semibold leading-none tracking-tight text-foreground md:text-[42px]">
                  {service.title}
                </h3>
                <Plus className="size-8 shrink-0 text-primary group-aria-expanded/accordion-trigger:hidden md:size-10" />
                <Minus className="hidden size-8 shrink-0 text-primary group-aria-expanded/accordion-trigger:block md:size-10" />
              </AccordionTrigger>

              <AccordionContent className="pb-0">
                <div className="flex flex-col gap-8 pb-10 md:flex-row md:gap-12">
                  {/* Video */}
                  <div className="aspect-video w-full shrink-0 overflow-hidden rounded-lg bg-muted md:w-80 lg:w-96">
                    <video
                      src={service.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="size-full object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col gap-6">
                    {"payloadDescription" in service && service.payloadDescription ? (
                      <RichText
                        data={service.payloadDescription}
                        className="text-base text-muted-foreground"
                      />
                    ) : (
                      <p className="text-base text-muted-foreground">
                        {service.description}
                      </p>
                    )}
                    <ul className="flex flex-col gap-1.5">
                      {service.bullets.map((b) => (
                        <li key={b} className="text-sm text-foreground">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
