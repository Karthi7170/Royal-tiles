import Collections from "@/components/Collections";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Inspiration from "@/components/Inspiration";
import Proof from "@/components/Proof";
import Showroom from "@/components/Showroom";
import TileCalculator from "@/components/TileCalculator";
import { businessJsonLd } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Header />
      <Hero />
      <Collections />
      <Inspiration />
      <TileCalculator />
      <Proof />
      <Showroom />
      <Enquiry />
      <Footer />
    </main>
  );
}
