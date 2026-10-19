import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const SERVICE_OPTIONS = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out",
  "Airbnb / Short-term Rental",
];

const inputClass =
  "w-full bg-transparent border border-border px-4 py-3.5 text-foreground text-[15px] placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground focus:ring-0 transition-colors";
const labelClass =
  "font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service_type: "",
    preferred_date: "",
    address: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      await base44.entities.QuoteRequest.create({
        ...form,
        status: "new",
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err?.message ||
          "Something went wrong. Please try again or call us directly."
      );
    }
  };

  return (
    <section id="quote" className="py-28 lg:py-40 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-background/60">
              Request a Quote
            </span>
            <h2 className="mt-4 font-heading text-4xl lg:text-5xl font-semibold tracking-tight">
              Book your clean in under a minute
            </h2>
            <p className="mt-5 text-background/70 leading-relaxed max-w-md">
              Tell us about your space and the service you need. We'll get back
              to you within 12 hours with a clear, tailored estimate.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-background/50">
                  Call us
                </div>
                <div className="mt-1 text-lg font-medium">(555) 012-3456</div>
              </div>
              <div>
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-background/50">
                  Email
                </div>
                <div className="mt-1 text-lg font-medium">hello@cleaningco.com</div>
              </div>
              <div>
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-background/50">
                  Hours
                </div>
                <div className="mt-1 text-lg font-medium">Mon–Sun · 7am–7pm</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {status === "success" ? (
              <div className="border border-background/20 p-10 lg:p-14 flex flex-col items-center justify-center text-center min-h-[420px]">
                <CheckCircle2 className="h-12 w-12 text-primary mb-6" strokeWidth={1.25} />
                <h3 className="font-heading text-2xl font-semibold mb-3">
                  Thank you — request received
                </h3>
                <p className="text-background/70 max-w-md leading-relaxed">
                  We've got your details. A team member will reach out within
                  12 hours with your tailored quote.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      service_type: "",
                      preferred_date: "",
                      address: "",
                      message: "",
                    });
                  }}
                  className="mt-8 text-[12px] font-semibold tracking-[0.15em] uppercase text-primary hover:opacity-80"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="border border-background/20 p-8 lg:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass} htmlFor="qf-name">
                      Full Name *
                    </label>
                    <input
                      id="qf-name"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputClass}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="qf-email">
                      Email *
                    </label>
                    <input
                      id="qf-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass}
                      placeholder="jane@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass} htmlFor="qf-phone">
                      Phone
                    </label>
                    <input
                      id="qf-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass}
                      placeholder="(555) 012-3456"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="qf-date">
                      Preferred Date
                    </label>
                    <input
                      id="qf-date"
                      type="date"
                      value={form.preferred_date}
                      onChange={(e) => update("preferred_date", e.target.value)}
                      className={`${inputClass} [color-scheme:dark]`}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="qf-service">
                    Service Type *
                  </label>
                  <select
                    id="qf-service"
                    required
                    value={form.service_type}
                    onChange={(e) => update("service_type", e.target.value)}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s} className="bg-foreground text-background">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass} htmlFor="qf-address">
                    Address
                  </label>
                  <input
                    id="qf-address"
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    className={inputClass}
                    placeholder="123 Main St, Your City"
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="qf-message">
                    Details
                  </label>
                  <textarea
                    id="qf-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your space — size, frequency, any specific needs."
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive-foreground bg-destructive/20 border border-destructive/40 px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 text-[13px] font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                      Sending
                    </>
                  ) : (
                    <>
                      Request My Quote
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}