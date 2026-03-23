import { motion } from "framer-motion";
import { Target, Heart, BarChart3 } from "lucide-react";

import aboutBg from "@/assets/about.webp";
const features = [
  { icon: Target, title: "BMI Analysis", desc: "Instantly calculate your Body Mass Index and understand your health category." },
  { icon: Heart, title: "Personalised Plans", desc: "Receive diet and workout recommendations tailored to your body's needs." },
  { icon: BarChart3, title: "Track Progress", desc: "Monitor your health journey over time with our built-in progress tracker." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50"
      style={{ backgroundImage: `url(${aboutBg})` }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-white mb-4">
          <span className="text-orange-500">About FitBalance</span>
          
        </h2>
        <p className="text-gray-200">
          FitBalance is a fitness platform that helps users monitor their health by calculating BMI and providing
          personalised diet and workout recommendations. It encourages people to follow a healthy lifestyle using
          simple web technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-white">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
