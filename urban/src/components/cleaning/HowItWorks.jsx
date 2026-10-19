import React from "react";
import { CalendarCheck, Sparkles, Sofa } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: CalendarCheck,
    title: "Book Online",
    body: "Schedule a cleaning that works for you — weekly, bi-weekly, monthly, or just once. A trusted cleaner is matched to your home.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "We Come Clean",
    body: "A certified cleaner arrives with supplies and equipment. Guaranteed quality, or we return and re-clean free of charge.",
  },
  {
    n: "03",
    icon: Sofa,
    title: "You Get to Relax",
    body: "Enjoy your sparkling home and look forward to the next visit, automated by our easy-to-use booking system.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              The Process
            </span>
            <h2 className="mt-4 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground max-w-xl">
              How our cleaning service works
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground leading-relaxed">
            Three simple steps separate you from a spotless space. No phone tag,
            no surprises — just a calender invite and a clean home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-background p-10 lg:p-12 flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                  Step {s.n}
                </span>
                <s.icon className="h-6 w-6 text-foreground" strokeWidth={1.25} />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}