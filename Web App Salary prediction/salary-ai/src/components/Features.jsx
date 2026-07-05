import {
  BrainCircuit,
  ChartColumnIncreasing,
  GraduationCap,
  Globe,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Salary Prediction",
    desc: "Estimate salaries instantly using advanced Machine Learning algorithms.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Salary Insights",
    desc: "Visualize market trends and compare compensation across industries.",
  },
  {
    icon: GraduationCap,
    title: "Education Impact",
    desc: "Understand how qualifications influence expected salary.",
  },
  {
    icon: Globe,
    title: "Location Analysis",
    desc: "Compare salaries across cities, countries, and regions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Employer Tools",
    desc: "Estimate competitive salary offers before publishing job vacancies.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Fast predictions with a clean interface and secure data handling.",
  },
];

function Features() {
  return (
    <section className="section bg-section">

      <div className="container-custom">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-primary">

            Why Choose SalaryAI?

          </h2>

          <p className="subtitle max-w-3xl mx-auto">

            Our platform combines Artificial Intelligence, Machine Learning,
            and salary analytics to help job seekers and employers make
            smarter compensation decisions.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="card p-8"
              >

                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">

                  <Icon size={32} className="text-primary"/>

                </div>

                <h3 className="text-2xl font-bold mt-6">

                  {feature.title}

                </h3>

                <p className="text-gray-600 mt-4 leading-8">

                  {feature.desc}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Features;