import Footer from "@/components/Footer/Footer";
import AboutMe from "@/components/landing/AboutMe";
import Banner from "@/components/landing/Banner";
import Membership from "@/components/landing/Membership";
import WhyJoin from "@/components/landing/WhyJoin";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar></Navbar>
      <Banner />
      <WhyJoin />
      <AboutMe />
      <Membership />
      <Footer />
    </div>
  );
}
