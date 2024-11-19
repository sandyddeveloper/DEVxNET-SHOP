import ChatBot from "@/components/layout/ChatBot";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('/bgs.jpg')" }}
      >
        <Header />
        <Hero />
        <ChatBot />
      </div>
      <Footer />
    </>
  );
}
