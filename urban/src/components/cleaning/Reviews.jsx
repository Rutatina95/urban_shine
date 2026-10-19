import React from "react";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    text: "The most thorough clean we've ever had. Every edge, every surface — it's like walking into a brand new home every visit. Booking took two minutes.",
  },
  {
    name: "David L.",
    role: "Office Manager",
    text: "Our glass-walled office has never looked this sharp. Reliable, discreet, and always on time. The difference is visible the moment you walk in.",
  },
  {
    name: "Priya K.",
    role: "Airbnb Host",
    text: "My guest reviews mention the cleanliness in nearly every booking. Turnovers are seamless and my calendar has never been fuller. Worth every penny.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 lg:py-40 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              Testimonials
            </span>
            <h2 className="mt-4 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              What our customers say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" strokeWidth={0} />
              ))}
            </div>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
              4.9 / 5 · 1,200+ reviews
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-background p-10 flex flex-col">
              <Quote className="h-7 w-7 text-foreground mb-8" strokeWidth={1} />
              <p className="text-foreground/90 leading-relaxed text-[15px] flex-1">
                "{r.text}"
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="font-heading font-semibold text-foreground">{r.name}</div>
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  {r.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}