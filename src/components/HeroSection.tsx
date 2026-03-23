import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-tight"
        >
          Balance Your Body,
          <br />
          <span className="text-orange-500">Balance Your Life</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl mx-auto"
        >
          Check your BMI, get personalized diet & workout plans, and start your journey to a healthier you.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8"
        >
          <Button
            asChild
            size="lg"
            className="text-base font-heading font-semibold px-8 py-6 bg-orange-500 hover:bg-orange-600 text-white"
          >
            <a href="#bmi">Get Started</a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;