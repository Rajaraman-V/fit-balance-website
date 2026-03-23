import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { calculateBmi, categoryColors, type BmiResult } from "@/lib/bmi";

import bmiBg from "@/assets/bmi-bg.jpg";

interface Props {
  onResult: (result: BmiResult) => void;
}

const BmiCalculator = ({ onResult }: Props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [diet, setDiet] = useState("");
  const [medical, setMedical] = useState("");
  const [result, setResult] = useState<BmiResult | null>(null);

  const handleCalculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) return;

    const r = calculateBmi(w, h);
    setResult(r);
    onResult(r);
  };

  return (
    <section
      id="bmi"
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bmiBg})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative container mx-auto px-4 max-w-2xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-white mb-4">
          <span className="text-orange-500">BMI Calculator</span>
          
        </h2>

        <p className="text-center text-gray-300 mb-10">
          Enter your details to calculate your Body Mass Index and get personalised recommendations.
        </p>

        <Card className="shadow-xl border-border/60 bg-white/90 backdrop-blur-lg">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg font-heading">
              <Calculator className="w-5 h-5 text-primary" />
              Your Health Details
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="e.g. 25"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="e.g. 170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="e.g. 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

            </div>

            {/* Gender */}
            <div className="space-y-1.5">
              <Label>Gender</Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Diet preference */}
            <div className="space-y-1.5">
              <Label>Diet preference</Label>
              <Select value={diet} onValueChange={setDiet}>
                <SelectTrigger>
                  <SelectValue placeholder="Select diet preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="veg">Veg</SelectItem>
                  <SelectItem value="nonveg">Non-Veg</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Medical history */}
            <div className="space-y-1.5">
              <Label htmlFor="medical">Medical History (optional)</Label>
              <Textarea
                id="medical"
                placeholder="Any conditions we should know about..."
                value={medical}
                onChange={(e) => setMedical(e.target.value)}
              />
            </div>

            <Button
              onClick={handleCalculate}
              className="w-full font-heading font-semibold"
              size="lg"
            >
              Calculate BMI
            </Button>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-6 rounded-xl bg-muted text-center"
                >
                  <p className="text-muted-foreground text-sm mb-1">
                    Your BMI
                  </p>

                  <p className={`text-5xl font-heading font-bold ${categoryColors[result.category]}`}>
                    {result.value}
                  </p>

                  <p className={`mt-2 text-lg font-semibold ${categoryColors[result.category]}`}>
                    {result.category}
                  </p>

                  {name && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Hey {name}, scroll down to see your personalised plan!
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BmiCalculator;