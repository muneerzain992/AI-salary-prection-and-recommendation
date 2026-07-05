import { BrainCircuit, Database, BarChart3, ShieldCheck } from "lucide-react";

function AboutSection() {
  const features = [
    {
      icon: BrainCircuit,
      title: "Artificial Intelligence",
      desc: "Predict salaries using intelligent machine learning algorithms trained on large datasets.",
    },
    {
      icon: Database,
      title: "Large Dataset",
      desc: "Analyze thousands of salary records from multiple industries and job roles.",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      desc: "Explore salary trends, industry comparisons, and career growth insights.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      desc: "Your prediction data remains private while providing fast and reliable results.",
    },
  ];

  return (
    <section className="section bg-white">
      <section id="about" className="section"></section>
      <div className="container-custom">

        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase">
            About SalaryAI
          </span>

          <h2 className="text-5xl font-bold text-primary mt-4">
            AI Powered Salary Prediction Platform
          </h2>

          <p className="subtitle max-w-4xl mx-auto">
            SalaryAI is an end-to-end Machine Learning application that helps
            professionals estimate expected salaries while enabling employers
            to benchmark competitive compensation packages. Our intelligent
            models analyze experience, education, job role, company size,
            industry, location, certifications, and skills to generate
            data-driven salary predictions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">

                  <Icon
                    className="text-primary"
                    size={32}
                  />

                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default AboutSection;