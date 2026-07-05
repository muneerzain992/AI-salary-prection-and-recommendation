import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Software Engineer",
    review:
      "SalaryAI helped me understand my market value before applying for jobs. The prediction was surprisingly accurate.",
  },
  {
    name: "Sarah Johnson",
    role: "HR Manager",
    review:
      "We use SalaryAI to benchmark salaries before publishing job openings. It saves time and improves hiring decisions.",
  },
  {
    name: "David Lee",
    role: "Data Analyst",
    review:
      "The dashboard and salary insights are excellent. It also helped me identify which skills would increase my salary.",
  },
];

function Testimonials() {
  return (
    <section className="section bg-section">

      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-primary font-semibold uppercase">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold text-primary mt-4">
            What Our Users Say
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="card p-8"
            >

              <div className="flex gap-1 mb-5">

                {[1,2,3,4,5].map((star)=>

                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                )}

              </div>

              <p className="text-gray-600 leading-8">
                "{item.review}"
              </p>

              <hr className="my-6"/>

              <h3 className="font-bold text-xl">
                {item.name}
              </h3>

              <p className="text-primary">
                {item.role}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;