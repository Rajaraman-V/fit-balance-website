import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FitnessTips from "@/components/FitnessTips";
import BmiCalculator from "@/components/BmiCalculator";
import DietPlanSection from "@/components/DietPlanSection";
import WorkoutPlanSection from "@/components/WorkoutPlanSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import type { BmiResult, BmiCategory } from "@/lib/bmi";

const Index = () => {
  const [bmiCategory, setBmiCategory] = useState<BmiCategory | null>(null);

  const handleBmiResult = (result: BmiResult) => {
    setBmiCategory(result.category);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FitnessTips />
      <BmiCalculator onResult={handleBmiResult} />
      <DietPlanSection category={bmiCategory} />
      <WorkoutPlanSection category={bmiCategory} />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
