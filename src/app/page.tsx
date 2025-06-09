import DeepVet360 from "@/components/DeepVet360";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SAPExperts from "@/components/SAPExperts";
import SkillsCapital from "@/components/SkillsCapital";
import TalentIn48Hours from "@/components/TalentIn48Hours";
import Testimonials from "@/components/Testimonials";
import ValueProposition from "@/components/ValueProposition";


export default function Home() {
  return (
    <main className="w-full bg-white">
      <Navbar/>
      <HeroSection/>
      <Expertise/>
      <DeepVet360/>
      <TalentIn48Hours/>
      <SkillsCapital/>
      <SAPExperts/>
      <Testimonials/>
      <ValueProposition/>
      <Footer/>
    </main>
  );
}
