"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TESTIMONIAL = {
  quote:
    "This platform has revolutionized our development workflow. The productivity gains have been incredible.",
  name: "Alex Chen",
  role: "Lead Developer",
  avatar:
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
  logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
};

const LOGOS = Array.from({ length: 10 }, (_, i) => ({
  src: `https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-${i + 1}.svg`,
  alt: `logo ${i + 1}`,
  hidden: i >= 6,
}));

export function Contact() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="mb-16 flex flex-col items-center gap-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Get in touch
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Book a call with a growth strategist
            </h2>
            <p className="max-w-xl text-base text-muted-foreground">
              Walk through your current numbers with Toggle. We will show you
              where the gaps are and which channels to prioritise first. Free,
              no obligation. Reach out at{" "}
              <a
                href="mailto:hello@toggle.solutions"
                className="text-foreground underline underline-offset-4"
              >
                reach out to our team
              </a>
            </p>
          </div>

          {/* Form + Testimonial */}
          <div className="grid max-w-7xl grid-cols-1 rounded-lg border lg:grid-cols-2">
            {/* Form */}
            <div className="border-b p-8 lg:border-r lg:border-b-0">
              <form className="grid grid-cols-2 gap-x-3 gap-y-6">
                <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Bruce" type="text" />
                </div>
                <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Wayne" type="text" />
                </div>
                <div className="flex flex-col gap-2 col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="bruce@wayne.com"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                  <Label>Company size</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a company size" />
                    </SelectTrigger>
                    <SelectContent>
                      {["1-10", "11-50", "51-100", "101-500", "501-1000"].map(
                        (s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                  <Label>Role</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      {["CEO", "CTO", "CFO", "Other"].map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2 col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    className="min-h-32"
                    placeholder="Share more about your use case, product, tech stack and what you want to accomplish"
                  />
                </div>
                <Button type="submit" size="lg" className="col-span-2">
                  Continue <ArrowRight aria-hidden="true" />
                </Button>
              </form>
            </div>

            {/* Testimonial */}
            <div className="flex h-full flex-col justify-between gap-12 p-8">
              <div className="flex items-center gap-3">
                <img
                  alt="Company logo"
                  className="h-6 w-auto object-contain md:h-8 dark:invert"
                  src={TESTIMONIAL.logo}
                />
              </div>
              <div className="space-y-6">
                <blockquote className="leading-snug text-muted-foreground sm:text-lg lg:max-w-md">
                  &ldquo;{TESTIMONIAL.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    alt={TESTIMONIAL.name}
                    className="size-9 rounded-full object-cover"
                    src={TESTIMONIAL.avatar}
                  />
                  <div>
                    <div className="text-sm font-medium">
                      {TESTIMONIAL.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {TESTIMONIAL.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
