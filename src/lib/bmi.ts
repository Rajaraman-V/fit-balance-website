export type BmiCategory = "Underweight" | "Normal" | "Overweight" | "Obese";

export interface BmiResult {
  value: number;
  category: BmiCategory;
}

export function calculateBmi(weightKg: number, heightCm: number): BmiResult {
  const heightM = heightCm / 100;
  const value = parseFloat((weightKg / (heightM * heightM)).toFixed(1));
  let category: BmiCategory;

  if (value < 18.5) category = "Underweight";
  else if (value < 25) category = "Normal";
  else if (value < 30) category = "Overweight";
  else category = "Obese";

  return { value, category };
}

export const categoryColors: Record<BmiCategory, string> = {
  Underweight: "text-info",
  Normal: "text-success",
  Overweight: "text-warning",
  Obese: "text-destructive",
};

export const dietPlans: Record<BmiCategory, { title: string; items: string[] }> = {
  Underweight: {
    title: "High-Calorie Nutritious Diet",
    items: ["High protein foods (eggs, chicken, fish)", "Nuts, seeds & dairy products", "Frequent meals (5-6 per day)", "Healthy fats (avocado, olive oil)", "Smoothies & protein shakes"],
  },
  Normal: {
    title: "Balanced Maintenance Diet",
    items: ["Balanced macronutrients", "Plenty of fruits & vegetables", "Moderate carbs & lean proteins", "Whole grains & fiber", "Stay hydrated"],
  },
  Overweight: {
    title: "Calorie-Deficit Diet",
    items: ["Low calorie, nutrient-dense foods", "High fiber vegetables & salads", "Avoid processed & junk food", "Lean proteins (grilled chicken, fish)", "Reduce sugar & refined carbs"],
  },
  Obese: {
    title: "Structured Weight Loss Diet",
    items: ["Strict calorie control", "High fiber vegetables & greens", "Eliminate junk food & sugary drinks", "Portion control & meal prep", "Consult a nutritionist"],
  },
};

export const workoutPlans: Record<BmiCategory, { title: string; items: string[] }> = {
  Underweight: {
    title: "Strength & Muscle Building",
    items: ["Strength training (3-4x/week)", "Light cardio (walking, swimming)", "Muscle building compound exercises", "Progressive overload", "Adequate rest days"],
  },
  Normal: {
    title: "Balanced Fitness Routine",
    items: ["Jogging or running (30 min)", "Yoga & flexibility work", "Bodyweight workouts", "Swimming or cycling", "Sports & recreational activities"],
  },
  Overweight: {
    title: "Fat Burning Program",
    items: ["Brisk walking (45 min daily)", "Cycling or elliptical training", "Cardio workouts (HIIT)", "Fat burning circuit training", "Gradual intensity increase"],
  },
  Obese: {
    title: "Low-Impact Weight Loss",
    items: ["Walking (start with 20 min)", "Water aerobics / swimming", "Stationary cycling", "Chair exercises & stretching", "Supervised gym sessions"],
  },
};
