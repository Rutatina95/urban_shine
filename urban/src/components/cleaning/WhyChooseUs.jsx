import React from "react";
import { HeartHandshake, ShieldCheck, Clock, SlidersHorizontal } from "lucide-react";
import { Image } from "@/components/ui/image";

const FEATURES = [
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction First",
    body: "We put customers first in everything we do — top-notch service for optimal results, every single time.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Is Our Priority",
    body: "We operate fully compliant with all safety regulations, with strict adherence to on-site protocols.",
  },
  {
    icon: Clock,
    title: "Quality Service Delivery",
    body: "Timely, professional cleaning optimized to exceed expectations and work around your schedule.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customized Experience",
    body: "Services tailored to your unique needs — we listen to your requirements and cover all the essentials.",
  },
];

const DETAIL_IMG =
  "https://media.base44.com/images/public/6ad4decfdad9903e47e3a4fa/3d4787c49_generated_image.png";

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
            <Image
              src={DETAIL_IMG}
              alt="Macro detail of a flawless polished steel faucet"
              className="h-full w-full"
              fittingType="fill"
            />
          </div>

          <div>
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              Why Choose Us
            </span>
            <h2 className="mt-4 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              A higher standard of clean
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              Here's why clients across the city trust us with their everyday
              cleaning needs across a wide range of services.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-px bg-border border border-border">
              {FEATURES.map((f) => (
                <div key={f.title} className="bg-background p-8">
                  <f.icon className="h-6 w-6 text-foreground mb-6" strokeWidth={1.25} />
                  <h3 className="font-heading text-base font-semibold text-foreground mb-3">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}