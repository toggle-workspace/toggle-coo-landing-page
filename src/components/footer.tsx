import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Case studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Book a strategy call.", href: "#booking" },
];

const SERVICE_LINKS = [
  { label: "Homepage sprint", href: "/services" },
  { label: "Full website redesign", href: "/services" },
  { label: "Webflow development", href: "/services" },
  { label: "UX/UI Design", href: "/services" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/wegems/",
    icon: "/brand/icon-linkedin.png",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: "/brand/icon-instagram.png",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-muted/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top */}
        <div className="flex flex-col gap-12 py-16 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/brand/logo-light.svg"
                alt="Wegems Studio"
                width={100}
                height={27}
                priority
              />
            </Link>
            <p className="max-w-xs text-base leading-relaxed text-muted-foreground">
              Your product is the gem.
              <br />
              We build the website that proves it.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold">Navigation</p>
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold">Services</p>
              <nav className="flex flex-col gap-2">
                {SERVICE_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <hr className="border-border" />

        {/* Bottom */}
        <div className="flex flex-col items-start gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs text-muted-foreground">
              © {year} Toggle Group Sdn. Bhd. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <Link
                href="/privacy-policy"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <span className="text-xs text-muted-foreground">|</span>
              <Link
                href="/terms"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="rounded-full p-2 transition-colors hover:bg-accent"
              >
                <Image src={s.icon} alt="" aria-hidden width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
