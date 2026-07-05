import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How accurate are the salary predictions?",
    answer:
      "Predictions depend on the training dataset and machine learning model. They provide estimated salary ranges based on the information you enter.",
  },
  {
    question: "Which factors affect salary prediction?",
    answer:
      "Experience, education, industry, company size, job title, location, certifications, and skills are all considered.",
  },
  {
    question: "Can employers use SalaryAI?",
    answer:
      "Yes. Employers can benchmark salaries and estimate competitive compensation packages before posting vacancies.",
  },
  {
    question: "Is my information stored?",
    answer:
      "No. Unless user accounts are added in the future, prediction data is not permanently stored.",
  },
];

function FAQ() {

  const [open, setOpen] = useState(null);

  return (

    <section className="section bg-white">

      <div className="container-custom max-w-4xl">

        <div className="text-center mb-16">

          <span className="text-primary uppercase font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-5xl font-bold text-primary mt-4">
            Have Questions?
          </h2>

        </div>

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="card p-6 mb-5 cursor-pointer"
            onClick={() => setOpen(open === index ? null : index)}
          >

            <div className="flex justify-between items-center">

              <h3 className="font-semibold text-lg">
                {faq.question}
              </h3>

              <ChevronDown
                className={`transition-transform ${
                  open === index ? "rotate-180" : ""
                }`}
              />

            </div>

            {open === index && (

              <p className="mt-5 text-gray-600 leading-7">
                {faq.answer}
              </p>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;