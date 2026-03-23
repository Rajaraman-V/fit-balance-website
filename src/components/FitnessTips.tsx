import { motion } from "framer-motion";
import { Heart, Droplets, Moon, Apple, Flame, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const tips = [
  { icon: Droplets, title: "Stay Hydrated", desc: "Drink at least 8 glasses of water daily to boost metabolism and energy." },
  { icon: Moon, title: "Sleep Well", desc: "Aim for 7-9 hours of quality sleep for muscle recovery and mental health." },
  { icon: Apple, title: "Eat Whole Foods", desc: "Prioritize fruits, vegetables, lean proteins, and whole grains." },
  { icon: Flame, title: "Stay Active", desc: "At least 30 minutes of moderate exercise daily keeps your heart strong." },
  { icon: Heart, title: "Manage Stress", desc: "Practice mindfulness or meditation to reduce cortisol and stay balanced." },
  { icon: Brain, title: "Mental Fitness", desc: "Challenge your brain with puzzles, reading, or learning new skills." },
];

const FitnessTips = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-4">
          Fitness Tips
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Simple daily habits that make a big difference in your health journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-border/60">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <tip.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FitnessTips;
