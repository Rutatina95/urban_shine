import React from "react";
import { Home, Building2, Sparkles, Truck, BedDouble, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    n: "01",
    icon: Home,
    title: "Residential Cleaning",
    body: "Bi-weekly, one-time, or tenancy turn-over — we keep your home immaculate with a detail-obsessed checklist.",
  },
  {
    n: "02",
    icon: Building2,
    title: "Commercial Cleaning",
    body: "Small offices, large buildings, dental clinics, or industrial spaces — maintained to a clinical standard.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Deep Cleaning",
    body: "A deeper, more effective clean that reaches every edge, surface, and corner most services miss.",
  },
  {
    n: "04",
    icon: Truck,
    title: "Move-In / Move-Out",
    body: "Start and end your chapter in a spotless space — full top-to-bottom turnover cleans for tenants and sellers.",
  },
  {
    n: "05",
    icon: BedDouble,
    title: "Airbnb / Short-term Rental",
    body: "Reliable guest-ready turnovers between bookings, so your reviews stay five stars and your calendar stays full.",
  },
];

export default function Services() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-28 lg:py-40 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
            The Service Matrix
          </span>
          <h2 className="mt-4 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Professional cleaning services
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A focused suite of services, each delivered with the same
            architectural precision. Choose what fits — we tailor every visit
            to your space.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="group bg-background p-10 lg:p-12 flex flex-col transition-colors hover:bg-secondary/60"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                  {s.n}
                </span>
                <s.icon className="h-6 w-6 text-foreground" strokeWidth={1.25} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px] flex-1">
                {s.body}
              </p>
              <button
                onClick={() => scrollTo("#quote")}
                className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground group-hover:text-primary transition-colors"
              >
                Request a Quote
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </button>
            </div>
          ))}

          <div className="bg-foreground text-background p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-background/60">
                Not sure?
              </span>
              <h3 className="mt-6 font-heading text-2xl font-semibold leading-tight">
                Tell us about your space and we'll recommend the right service.
              </h3>
            </div>
            <button
              onClick={() => scrollTo("#quote")}
              className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-[12px] font-semibold tracking-[0.15em] uppercase w-fit hover:opacity-90 transition-opacity"
            >
              Get a Quote
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}