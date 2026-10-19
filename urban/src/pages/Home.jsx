import React from "react";
import Header from "@/components/cleaning/Header";
import Hero from "@/components/cleaning/Hero";
import HowItWorks from "@/components/cleaning/HowItWorks";
import Services from "@/components/cleaning/Services";
import WhyChooseUs from "@/components/cleaning/WhyChooseUs";
import ComparisonTable from "@/components/cleaning/ComparisonTable";
import Reviews from "@/components/cleaning/Reviews";
import FAQ from "@/components/cleaning/FAQ";
import QuoteForm from "@/components/cleaning/QuoteForm";
import Footer from "@/components/cleaning/Footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <WhyChooseUs />
        <ComparisonTable />
        <Reviews />
        <FAQ />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}