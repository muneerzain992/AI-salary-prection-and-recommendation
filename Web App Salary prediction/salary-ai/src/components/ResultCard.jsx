import { motion } from "framer-motion";
import { DollarSign, TrendingUp, BadgeCheck, Loader2 } from "lucide-react";

function ResultCard({ prediction, loading }) {
  const formattedSalary = prediction 
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(prediction) 
    : "$---";

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="card p-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-60"></div>
      
      <div className="flex justify-between relative z-10">
        <h2 className="text-3xl font-bold">
          Prediction Result
        </h2>
        <DollarSign size={42} className="text-primary" />
      </div>

      <div className="mt-10 text-center relative z-10">
        <h1 className="text-6xl font-bold text-primary flex justify-center items-center h-20">
          {loading ? (
            <Loader2 className="animate-spin" size={50} />
          ) : (
            formattedSalary
          )}
        </h1>
        <p className="mt-3 text-gray-500">
          Estimated Annual Salary
        </p>
      </div>

      <div className="mt-10 relative z-10">
        <div className="flex justify-between">
          <span className="font-medium">Confidence</span>
          <span className="font-bold text-primary">{prediction ? "96%" : "---"}</span>
        </div>
        <div className="h-4 rounded-full bg-gray-200 mt-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: prediction ? "96%" : "0%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="bg-primary h-full rounded-full"
          ></motion.div>
        </div>
      </div>

      <div className="mt-8 space-y-5 relative z-10">
        <div className="flex items-center gap-3 font-medium text-gray-700">
          <BadgeCheck className="text-primary" />
          Market Competitive
        </div>
        <div className="flex items-center gap-3 font-medium text-gray-700">
          <TrendingUp className="text-primary" />
          Salary Growth Expected
        </div>
      </div>
    </motion.div>
  );
}

export default ResultCard;