import { motion } from "framer-motion";
import {
  Building2,
  Users,
  BriefcaseBusiness,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-scroll";

function EmployerSection() {
  return (
    <section className="section bg-white/60 backdrop-blur-sm relative z-10">

      <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">

        <motion.div
          initial={{ opacity:0, x:-40 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:.7 }}
          viewport={{ once:true }}
        >

          <div className="card p-10">

            <h3 className="text-3xl font-bold text-primary mb-8">
              Employer Dashboard
            </h3>

            <div className="grid grid-cols-2 gap-6">

              <div className="card p-6 text-center">
                <BadgeDollarSign className="mx-auto text-primary"/>
                <h4 className="text-3xl font-bold mt-3">$82K</h4>
                <p>Average Salary</p>
              </div>

              <div className="card p-6 text-center">
                <Users className="mx-auto text-primary"/>
                <h4 className="text-3xl font-bold mt-3">320</h4>
                <p>Applicants</p>
              </div>

              <div className="card p-6 text-center">
                <Building2 className="mx-auto text-primary"/>
                <h4 className="text-3xl font-bold mt-3">20+</h4>
                <p>Industries</p>
              </div>

              <div className="card p-6 text-center">
                <BriefcaseBusiness className="mx-auto text-primary"/>
                <h4 className="text-3xl font-bold mt-3">150+</h4>
                <p>Job Titles</p>
              </div>

            </div>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity:0, x:40 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:.8 }}
          viewport={{ once:true }}
        >

          <span className="font-semibold text-primary uppercase">
            For Employers
          </span>

          <h2 className="text-5xl font-bold mt-5 text-primary">
            Hire Smarter with AI Salary Intelligence
          </h2>

          <p className="subtitle">
            Estimate competitive salary packages before publishing a vacancy.
            Compare salaries across industries, company sizes, experience
            levels, and locations to attract the best candidates.
          </p>

          <div className="space-y-5 mt-10">

            <p>✔ Estimate salary before posting jobs</p>
            <p>✔ Benchmark compensation with market data</p>
            <p>✔ Reduce hiring costs</p>
            <p>✔ Improve employee retention</p>
            <p>✔ Make data-driven hiring decisions</p>

          </div>

          <Link 
            to="features" 
            smooth={true} 
            duration={800} 
            offset={-100}
            className="primary-btn mt-10"
          >
            Explore Employer Tools
            <ArrowRight size={18}/>
          </Link>

        </motion.div>

      </div>

    </section>
  );
}

export default EmployerSection;