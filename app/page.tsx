import AdBanner from "@/components/AdBanner";
import Deals from "@/components/Deals";
import CategoriesSection from "@/components/layout/CompactProducts";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import ChatBot from "@/components/ui/ChatBot";

export default function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen md:min-h-[75vh] lg:min-h-[50vh]"
        style={{ backgroundImage: "url('/bgs.jpg')" }}
      >
        <Header />
        <Hero />
        <ChatBot />
      </div>
      <CategoriesSection />
      <Deals />
      <AdBanner />
      <Footer />
    </>
  );
}
