import React from "react";
import { Check, X } from "lucide-react";

const ROWS = [
  "Brings supplies and equipment",
  "Scheduling flexibility",
  "Insured and bonded",
  "Police and background checked",
  "Satisfaction guarantee",
  "12-hour-a-day customer service",
  "Living wage employer",
  "98% satisfaction rating",
  "Best post-service support",
];

const COLS = [
  { key: "individual", label: "Individual Cleaners" },
  { key: "others", label: "Other Companies" },
  { key: "us", label: "Cleaning Co.", highlight: true },
];

// true = check, false = cross
const DATA = {
  individual: [false, true, false, false, false, false, false, false, false],
  others: [true, true, true, false, true, false, false, true, false],
  us: [true, true, true, true, true, true, true, true, true],
};

export default function ComparisonTable() {
  return (
    <section className="py-28 lg:py-40 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
            The Comparison
          </span>
          <h2 className="mt-4 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            How we compare
          </h2>
        </div>

        <div className="overflow-x-auto -mx-6 lg:mx-0">
          <div className="min-w-[640px] px-6 lg:px-0">
            <div className="grid grid-cols-4 border-t border-border">
              <div className="py-6 pr-4 font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                Features
              </div>
              {COLS.map((c) => (
                <div
                  key={c.key}
                  className={`py-6 px-4 text-center font-heading text-sm font-semibold ${
                    c.highlight ? "bg-foreground text-background" : "text-foreground"
                  }`}
                >
                  {c.label}
                </div>
              ))}
            </div>

            {ROWS.map((row, i) => (
              <div
                key={row}
                className={`grid grid-cols-4 border-t border-border ${
                  i % 2 ? "bg-background/40" : ""
                }`}
              >
                <div className="py-5 pr-4 text-[14px] text-foreground">{row}</div>
                {COLS.map((c) => {
                  const ok = DATA[c.key][i];
                  return (
                    <div
                      key={c.key}
                      className={`py-5 px-4 flex items-center justify-center ${
                        c.highlight ? "bg-foreground/[0.04]" : ""
                      }`}
                    >
                      {ok ? (
                        <Check className="h-5 w-5 text-foreground" strokeWidth={2} />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/50" strokeWidth={1.5} />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}