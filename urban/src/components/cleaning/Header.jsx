import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => scrollTo("#top")}
            className="flex items-center gap-2.5 group"
          >
            <span className="flex h-9 w-9 items-center justify-center bg-foreground text-background">
              <Sparkles className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <span className="font-heading text-sm font-semibold tracking-[0.2em] uppercase text-foreground">
              Cleaning Co.
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-[13px] font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollTo("#quote")}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-[13px] font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity"
            >
              Request a Quote
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left py-3 text-sm font-medium text-foreground border-b border-border/60"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#quote")}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3.5 text-[13px] font-semibold tracking-wide uppercase"
            >
              Request a Quote
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}