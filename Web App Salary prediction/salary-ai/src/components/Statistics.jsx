import { motion } from "framer-motion";
import {
  Users,
  BriefcaseBusiness,
  TrendingUp,
  BrainCircuit,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "250K+",
    title: "Salary Records",
    description: "Large dataset used for training ML models.",
  },
  {
    icon: BrainCircuit,
    number: "13",
    title: "Machine Learning Models",
    description: "Compare multiple regression algorithms.",
  },
  {
    icon: BriefcaseBusiness,
    number: "150+",
    title: "Job Roles",
    description: "Predict salaries across various careers.",
  },
  {
    icon: TrendingUp,
    number: "98%",
    title: "Prediction Accuracy",
    description: "Highly optimized machine learning pipeline.",
  },
];

function Statistics() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <Icon className="text-primary" size={32} />
                </div>

                <h2 className="text-4xl font-bold text-primary mt-6">
                  {item.number}
                </h2>

                <h3 className="text-xl font-semibold mt-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Statistics;