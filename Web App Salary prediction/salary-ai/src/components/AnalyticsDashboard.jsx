import {
  DollarSign,
  TrendingUp,
  Users,
  BriefcaseBusiness,
  Building2,
  Award,
} from "lucide-react";

function AnalyticsDashboard() {

  const cards = [
    {
      icon: DollarSign,
      title: "Average Salary",
      value: "$92,450",
    },
    {
      icon: TrendingUp,
      title: "Highest Salary",
      value: "$214,000",
    },
    {
      icon: Users,
      title: "Predictions",
      value: "25,000+",
    },
    {
      icon: BriefcaseBusiness,
      title: "Job Roles",
      value: "150+",
    },
    {
      icon: Building2,
      title: "Industries",
      value: "20+",
    },
    {
      icon: Award,
      title: "Model Accuracy",
      value: "98%",
    },
  ];

  return (

    <section className="section bg-section">

      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-primary font-semibold uppercase">
            Analytics Dashboard
          </span>

          <h2 className="text-5xl font-bold text-primary mt-4">

            Salary Insights & Market Analytics

          </h2>

          <p className="subtitle max-w-3xl mx-auto">

            Explore salary trends, compare industries,
            analyze education impact,
            and understand market demand through
            interactive analytics powered by AI.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {cards.map((card,index)=>{

            const Icon = card.icon;

            return(

              <div
                key={index}
                className="card p-8"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <p className="text-gray-500">

                      {card.title}

                    </p>

                    <h3 className="text-4xl font-bold mt-2 text-primary">

                      {card.value}

                    </h3>

                  </div>

                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">

                    <Icon
                      size={30}
                      className="text-primary"
                    />

                  </div>

                </div>

              </div>

            )

          })}

        </div>
      </div>
    </section>

  );

}

export default AnalyticsDashboard;