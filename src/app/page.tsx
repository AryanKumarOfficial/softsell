import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import ChatWidget from "@/components/ChatWidget/ChatWidget";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <ChatWidget />
      </main>
      {/* <Footer /> */}
    </>
  );
}
