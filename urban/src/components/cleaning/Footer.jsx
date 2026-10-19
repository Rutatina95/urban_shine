import React from "react";
import { Sparkles, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center bg-foreground text-background">
                <Sparkles className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <span className="font-heading text-sm font-semibold tracking-[0.2em] uppercase text-foreground">
                Cleaning Co.
              </span>
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm">
              A higher standard of cleaning for residential and commercial
              clients. Detail-obsessed, reliable, and guaranteed.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-5">
              Explore
            </div>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Process", href: "#process" },
                { label: "Why Us", href: "#why" },
                { label: "Reviews", href: "#reviews" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-5">
              Contact
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-foreground/80">
                <Phone className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                (555) 012-3456
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/80">
                <Mail className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                hello@cleaningco.com
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/80">
                <MapPin className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                Your City & surrounding areas
              </li>
            </ul>
            <button
              onClick={() => scrollTo("#quote")}
              className="mt-6 inline-flex items-center justify-center bg-foreground text-background px-5 py-3 text-[12px] font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
            >
              Request a Quote
            </button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} Cleaning Co. — All rights reserved
          </p>
          <div className="flex gap-6">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
              Privacy
            </span>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}