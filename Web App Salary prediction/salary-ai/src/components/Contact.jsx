import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section bg-section">
      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-primary font-semibold uppercase">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold text-primary mt-4">
            Let's Connect
          </h2>

          <p className="subtitle max-w-3xl mx-auto">
            Have questions about SalaryAI or want to collaborate? We'd love to
            hear from you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="card p-8">

            <h3 className="text-3xl font-bold text-primary mb-8">
              Send a Message
            </h3>

            <form className="space-y-5">

              <input
                className="w-full border rounded-xl p-4"
                placeholder="Full Name"
              />

              <input
                className="w-full border rounded-xl p-4"
                placeholder="Email Address"
              />

              <input
                className="w-full border rounded-xl p-4"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                className="w-full border rounded-xl p-4"
                placeholder="Your Message"
              />

              <button className="primary-btn flex items-center gap-2">

                <Send size={18} />

                Send Message

              </button>

            </form>

          </div>

          <div className="space-y-6">

            <div className="card p-8 flex gap-5">

              <Mail className="text-primary" />

              <div>

                <h3 className="font-bold text-xl">
                  Email
                </h3>

                <p>support@salaryai.com</p>

              </div>

            </div>

            <div className="card p-8 flex gap-5">

              <Phone className="text-primary" />

              <div>

                <h3 className="font-bold text-xl">
                  Phone
                </h3>

                <p>+966 5X XXX XXXX</p>

              </div>

            </div>

            <div className="card p-8 flex gap-5">

              <MapPin className="text-primary" />

              <div>

                <h3 className="font-bold text-xl">
                  Location
                </h3>

                <p>Riyadh, Saudi Arabia</p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;