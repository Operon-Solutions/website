import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PlatformGrid from "@/components/PlatformGrid";
import Showcase from "@/components/Showcase";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <PlatformGrid />
      <Showcase />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
