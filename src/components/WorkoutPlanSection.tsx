import { motion } from "framer-motion";
import { Dumbbell, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { workoutPlans, type BmiCategory } from "@/lib/bmi";

import WorkBg from "@/assets/work-ph.jpg";

interface Props {
  category: BmiCategory | null;
}

const WorkoutPlanSection = ({ category }: Props) => {
  const plans = category ? { [category]: workoutPlans[category] } : workoutPlans;

  return (
    
      
    <section id="workout"
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${WorkBg})` }}>

      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-white mb-4">
          <span className="text-orange-500">Workout Plan</span>
          
        </h2>
        <p className="text-center text-gray-200 mb-10 max-w-2xl mx-auto">
          {category
            ? `Based on your BMI category (${category}), here's your recommended workout plan.`
            : "Calculate your BMI above to see your personalised workout plan. Here's an overview:"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {Object.entries(plans).map(([cat, plan], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className={`h-full hover:shadow-lg transition-shadow ${category ? "ring-2 ring-primary" : ""}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 font-heading text-lg">
                    <Dumbbell className="w-5 h-5 text-primary" />
                    {plan.title}
                  </CardTitle>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{cat}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlanSection;
