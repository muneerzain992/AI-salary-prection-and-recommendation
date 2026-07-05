import {
  FaGlobe,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-[#0F5132] text-white py-16">
      <div className="container-custom">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              SalaryAI
            </h2>

            <p className="mt-4 text-gray-200 leading-7">
              AI-powered salary prediction platform built with Machine Learning,
              React, Flask, and Scikit-learn.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Navigation
            </h3>

            <ul className="space-y-2">
              <li>Home</li>
              <li>Predict Salary</li>
              <li>Insights</li>
              <li>About</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Resources
            </h3>

            <ul className="space-y-2">
              <li>Documentation</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <div className="flex gap-4 mt-4">

             <FaGlobe size={22} />
<FaLinkedin size={22} />
<FaEnvelope size={22} />

            </div>
          </div>

        </div>

        <hr className="my-10 border-white/20" />

        <div className="text-center text-gray-200">
          © 2026 SalaryAI • Built with React, Flask & Machine Learning
        </div>

      </div>
    </footer>
  );
}

export default Footer;