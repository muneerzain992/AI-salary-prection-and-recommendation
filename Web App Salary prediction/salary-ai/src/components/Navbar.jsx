import { useState, useEffect } from "react";
import { Menu, X, BriefcaseBusiness } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Predict Salary", href: "#predict" },
    { name: "Insights", href: "#insights" },
    { name: "Job Seeker", href: "#job-seeker" },
    { name: "Employer", href: "#employer" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-xl py-2"
          : "bg-white/95 backdrop-blur-md py-3"
      }`}
    >
      <div className="container-custom flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-[#0F5132] flex items-center justify-center">
            <span className="text-white font-bold text-lg">SI</span>
          </div>

          <div>

            <h2 className="text-2xl font-bold text-[#0F5132]">

              SalaryAI

            </h2>

            <p className="text-xs text-gray-500">

              AI Salary Prediction

            </p>

          </div>

        </a>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-8 font-medium">

          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-700 hover:text-[#0F5132] transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}

        </ul>

        {/* Desktop Button */}

        <a
          href="#predict"
          className="hidden lg:inline-block primary-btn"
        >
          Get Started
        </a>

        {/* Mobile Button */}

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white shadow-lg border-t">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 border-b hover:bg-green-50 transition"
            >
              {link.name}
            </a>

          ))}

          <div className="p-5">

            <a
              href="#predict"
              onClick={() => setMenuOpen(false)}
              className="primary-btn w-full text-center block"
            >
              Get Started
            </a>

          </div>

        </div>

      )}
    </nav>
  );
}

export default Navbar;