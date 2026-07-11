import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Features from "../components/Features";
import JobSeekerSection from "../components/JobSeekerSection";
import EmployerSection from "../components/EmployerSection";
import PredictionForm from "../components/PredictionForm";
import ResultCard from "../components/ResultCard";
import HowItWorks from "../components/HowItWorks";
import Charts from "../components/Charts";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Bubbles from "../components/Bubbles";

function Home() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* Background Animation */}
      <Bubbles />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      {/* Statistics */}
      <section id="statistics" className="scroll-mt-24">
        <Statistics />
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24">
        <Features />
      </section>

      {/* Job Seeker */}
      <section id="job-seeker" className="scroll-mt-24">
        <JobSeekerSection />
      </section>

      {/* Employer */}
      <section id="employer" className="scroll-mt-24">
        <EmployerSection />
      </section>

      {/* Salary Prediction */}
      <section
        id="predict"
        className="section scroll-mt-24"
      >
        <div className="container-custom grid lg:grid-cols-2 gap-10 items-start relative z-10">
          <PredictionForm 
            prediction={prediction} 
            setPrediction={setPrediction} 
            loading={loading} 
            setLoading={setLoading} 
          />
          <ResultCard prediction={prediction} loading={loading} />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="scroll-mt-24">
        <HowItWorks />
      </section>

      {/* Salary Insights */}
      <section id="insights" className="scroll-mt-24">
        <Charts />
      </section>

      {/* Dashboard */}
      <section id="dashboard" className="scroll-mt-24">
        <AnalyticsDashboard />
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24">
        <AboutSection />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-24">
        <Testimonials />
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24">
        <FAQ />
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;