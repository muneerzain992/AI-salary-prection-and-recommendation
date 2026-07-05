import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  GraduationCap,
  Award,
  ArrowRight,
} from "lucide-react";

function JobSeekerSection() {
  return (
    <section className="section bg-section">
      <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="text-primary font-semibold uppercase">
            For Job Seekers
          </span>

          <h2 className="text-5xl font-bold mt-5 text-primary">
            Discover Your True Market Value
          </h2>

          <p className="subtitle">
            Predict your expected salary using AI. Analyze your skills,
            education, experience, industry, and location to understand how
            employers value your profile.
          </p>

          <div className="space-y-5 mt-10">

            <div className="flex gap-4">
              <DollarSign className="text-primary"/>
              <p>Predict your expected salary instantly.</p>
            </div>

            <div className="flex gap-4">
              <TrendingUp className="text-primary"/>
              <p>Compare with current market salary trends.</p>
            </div>

            <div className="flex gap-4">
              <GraduationCap className="text-primary"/>
              <p>Understand how education affects salary.</p>
            </div>

            <div className="flex gap-4">
              <Award className="text-primary"/>
              <p>Receive personalized skill recommendations.</p>
            </div>

          </div>

          <button className="primary-btn mt-10 flex items-center gap-2">
            Start Prediction
            <ArrowRight size={18}/>
          </button>

        </motion.div>

        <motion.div
          initial={{ opacity:0, x:40 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:.8 }}
          viewport={{ once:true }}
        >

          <div className="card p-8">

            <h3 className="text-2xl font-bold text-primary">
              Salary Growth Forecast
            </h3>

            <div className="space-y-6 mt-8">

              {[
                ["Junior Developer", "$45,000"],
                ["Mid-Level Developer", "$72,000"],
                ["Senior Developer", "$105,000"],
                ["Lead Engineer", "$138,000"],
              ].map((item, index) => (

                <div key={index}>

                  <div className="flex justify-between mb-2">

                    <span>{item[0]}</span>

                    <span className="font-semibold">{item[1]}</span>

                  </div>

                  <div className="w-full h-3 rounded-full bg-gray-200">

                    <div
                      className="bg-primary h-3 rounded-full"
                      style={{
                        width: `${25 + index * 20}%`,
                      }}
                    ></div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default JobSeekerSection;