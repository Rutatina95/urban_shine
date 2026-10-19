import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How much do most house cleaning services cost?",
    a: "Pricing depends on your home's specifications and cleaning needs — regular, deep, or move in/out. Our minimum is $55/hour for 3 hours on the initial visit, and as low as $47/hr for recurring visits. Use the quote form for a live estimate tailored to your space.",
  },
  {
    q: "Do you tip a house cleaner?",
    a: "Tipping is never mandatory but always appreciated by your cleaner. 100% of any tip goes directly to the cleaner — just let us know over the phone or add it through the customer portal and it'll be applied to your account.",
  },
  {
    q: "How should I prepare for a house cleaning?",
    a: "We bring all supplies and equipment. If you prefer your own products, have them ready before arrival. Share any instructions, priorities, or a cleaning checklist with our team beforehand, and declutter floors so our technician can be efficient and effective.",
  },
  {
    q: "How long does it take to have your house cleaned?",
    a: "Duration depends on the type of cleaning, your home's size, and overall level of cleanliness. Spend two minutes filling in your home's specifications and any extras in the quote form, and you'll receive a clear estimate.",
  },
  {
    q: "Are your cleaners insured and background-checked?",
    a: "Yes. Every cleaner is insured, bonded, and police-checked, and we back every visit with a satisfaction guarantee — if it's not right, we return and re-clean free of charge.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              FAQ
            </span>
            <h2 className="mt-4 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              Got a few questions?
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Everything you need to know before booking. Still unsure? Reach
              out and a team member will help.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-border">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-border">
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`font-heading text-lg lg:text-xl font-medium transition-colors ${
                          isOpen ? "text-foreground" : "text-foreground/80"
                        }`}
                      >
                        {f.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        strokeWidth={1.5}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-muted-foreground leading-relaxed max-w-2xl">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}