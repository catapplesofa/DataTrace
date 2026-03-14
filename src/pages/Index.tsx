import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import DataWall from "@/components/landing/DataWall";
import Features from "@/components/landing/Features";
import SocialProof from "@/components/landing/SocialProof";
import CTAFooter from "@/components/landing/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DataWall />
      <Features />
      <SocialProof />
      <CTAFooter />
    </div>
  );
};

export default Index;
