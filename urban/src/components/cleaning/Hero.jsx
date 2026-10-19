import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { Image } from "@/components/ui/image";

const HERO_IMG =
  "https://media.base44.com/images/public/6ad4decfdad9903e47e3a4fa/9760db9c8_generated_image.png";

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="Minimalist sunlit living room with polished concrete floors"
          className="h-full w-full object-cover"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-foreground/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-20 pt-40 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center gap-1 text-primary">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-primary" strokeWidth={0} />
              ))}
            </span>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-background/80">
              98% Satisfaction · Trusted Across the City
            </span>
          </div>

          <h1 className="font-heading text-background text-5xl sm:text-6xl lg:text-8xl font-semibold leading-[0.95] tracking-tight">
            The Standard
            <br />
            <span className="block text-right lg:text-left lg:pl-24">Of Clean.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base lg:text-lg text-background/80 leading-relaxed font-light">
            A higher standard of cleaning for residential and commercial clients.
            We deliver exceptional, detail-obsessed service so you can reclaim your
            time and focus on what truly matters.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("#quote")}
              className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="inline-flex items-center justify-center gap-2 border border-background/40 text-background px-7 py-4 text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-background/10 transition-colors"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}