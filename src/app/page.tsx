import { Hero } from "@/components/home/Hero";
import { CategorySection } from "@/components/home/CategorySection";
import { NewArrivals } from "@/components/home/NewArrivals";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { BestSellers } from "@/components/home/BestSellers";
import { AgeSection } from "@/components/home/AgeSection";
import { SaleBanner } from "@/components/home/SaleBanner";
import { Benefits } from "@/components/home/Benefits";
import { Reviews } from "@/components/home/Reviews";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <CategorySection />
        <NewArrivals />
        <FeaturedCollection />
        <BestSellers />
        <AgeSection />
        <SaleBanner />
        <Benefits />
        <Reviews />
        <Newsletter />
      </main>
    </>
  );
}
