"use client"

import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our work", href: "#works" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "/contact" },
  { label: "Insights", href: "/insights" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/8 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/brand/logo-light.svg"
            alt="Toggle"
            width={100}
            height={27}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded px-3 py-1.5 text-sm text-[#03111c] transition-colors hover:bg-black/4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#booking"
          className="hidden rounded-lg border border-black/5 bg-primary px-4 py-2 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90 md:block"
        >
          Book a call
        </Link>

        <Sheet>
          <SheetTrigger
            className="md:hidden rounded p-2 text-[#03111c] transition-colors hover:bg-black/4"
            render={<button />}
          >
            <MenuIcon className="size-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-full flex flex-col p-0">
            <div className="flex h-16 items-center border-b border-black/8 px-6">
              <Link href="/">
                <Image
                  src="/brand/logo-light.svg"
                  alt="Toggle"
                  width={100}
                  height={27}
                  priority
                />
              </Link>
            </div>
            <nav className="flex flex-1 flex-col gap-1 p-6">
              {NAV_LINKS.map((link) => (
                <SheetClose
                  key={link.label}
                  render={
                    <Link
                      href={link.href}
                      className="rounded px-3 py-3 text-lg text-[#03111c] transition-colors hover:bg-black/4"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <div className="p-6">
              <SheetClose
                render={
                  <Link
                    href="#booking"
                    className="flex w-full items-center justify-center rounded-lg border border-black/5 bg-primary px-4 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
                  />
                }
              >
                Book a call
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
