import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  ArrowRight,
  BrainCircuit,
  ChartColumnIncreasing,
  DollarSign,
  BriefcaseBusiness,
} from "lucide-react";

function Hero() {
  return (
    <section className="section pt-36 relative z-10">
      <div className="container-custom grid lg:grid-cols-2 gap-1 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-green-100 text-primary px-5 py-2 rounded-full font-semibold inline-block mb-4 shadow-sm">
            AI Powered Salary Prediction
          </span>

          <h1 className="title mt-6 text-primary">
            Predict Your Expected Salary
            <br />
            Using Artificial Intelligence
          </h1>

          <p className="subtitle">
            Discover your market value with our intelligent salary prediction platform.
            Our Machine Learning models analyze your experience, education,
            industry, skills, company size, and job role to estimate your expected salary accurately.
          </p>

          <div className="flex flex-wrap gap-6 mt-10">
            <Link
              to="predict"
              smooth={true}
              duration={800}
              offset={-100}
              className="primary-btn"
            >
              Predict Salary
              <ArrowRight size={18} />
            </Link>

            <Link
              to="insights"
              smooth={true}
              duration={800}
              offset={-100}
              className="secondary-btn"
            >
              Explore Salary Trends
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14">
            <div>
              <h2 className="text-4xl font-bold text-primary">250K+</h2>
              <p className="text-gray-600 font-medium">Salary Records</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary">13</h2>
              <p className="text-gray-600 font-medium">ML Models</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary">97%</h2>
              <p className="text-gray-600 font-medium">Accuracy</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="card p-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">AI Dashboard</h3>
              <BrainCircuit className="text-primary" size={40} />
            </div>

            <div className="grid grid-cols-2 gap-5 mt-8">
              <div className="card p-5 text-center flex flex-col items-center justify-center bg-white/40">
                <DollarSign className="text-primary" size={40} />
                <h3 className="text-3xl font-bold mt-3">$82K</h3>
                <p className="font-medium text-gray-600">Predicted Salary</p>
              </div>

              <div className="card p-5 text-center flex flex-col items-center justify-center bg-white/40">
                <ChartColumnIncreasing className="text-primary" size={40} />
                <h3 className="text-3xl font-bold mt-3">96%</h3>
                <p className="font-medium text-gray-600">Confidence</p>
              </div>

              <div className="card p-5 text-center flex flex-col items-center justify-center bg-white/40">
                <BriefcaseBusiness className="text-primary" size={40} />
                <h3 className="text-xl font-bold mt-3">Data Analyst</h3>
                <p className="font-medium text-gray-600">Job Role</p>
              </div>

              <div className="card p-5 text-center flex flex-col items-center justify-center bg-white/40">
                <BrainCircuit className="text-primary" size={40} />
                <h3 className="text-xl font-bold mt-3">AI Ready</h3>
                <p className="font-medium text-gray-600">Prediction Engine</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;