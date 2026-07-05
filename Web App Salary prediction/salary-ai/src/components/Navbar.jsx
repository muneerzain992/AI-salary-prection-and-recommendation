import { useState } from "react";
import { Menu, X, BriefcaseBusiness } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "Predict Salary",
    "Insights",
    "Job Seeker",
    "Employer",
    "About",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container-custom flex items-center justify-between h-20">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">

            <BriefcaseBusiness className="text-white"/>

          </div>

          <div>

            <h2 className="font-heading text-2xl font-bold text-primary">

              SalaryAI

            </h2>

          </div>

        </div>

        <ul className="hidden lg:flex gap-8 font-medium">

          {links.map((item) => (

            <li
              key={item}
              className="cursor-pointer hover:text-primary transition"
            >
              {item}
            </li>

          ))}

        </ul>

        <button className="hidden lg:block primary-btn">

          Get Started

        </button>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>

      </div>

      {menuOpen && (

        <div className="bg-white border-t lg:hidden">

          {links.map((item)=>(

            <a
              key={item}
              href="#"
              className="block px-6 py-4 hover:bg-gray-100"
            >

              {item}

            </a>

          ))}

          <div className="p-5">

            <button className="primary-btn w-full">

              Get Started

            </button>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;