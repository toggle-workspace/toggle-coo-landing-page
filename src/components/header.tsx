"use client";

import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-60 w-full border-b border-black/8 bg-white">
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

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden rounded p-2 text-[#03111c] transition-colors hover:bg-black/4"
            render={<button />}
          >
            {open ? (
              <XIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </SheetTrigger>
          <SheetContent
            side="top"
            showCloseButton={false}
            className="inset-0! w-screen h-screen max-w-none! flex flex-col p-0"
          >
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
