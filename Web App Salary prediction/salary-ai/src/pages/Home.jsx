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

function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Statistics */}
      <Statistics />

      {/* Features */}
      <Features />

      {/* Job Seeker Section */}
      <JobSeekerSection />

      {/* Employer Section */}
      <EmployerSection />

      {/* Salary Prediction Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase">
              AI Salary Prediction
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Predict Your Expected Salary
            </h2>

            <p className="subtitle max-w-3xl mx-auto">
              Enter your professional details and let our Machine Learning
              model estimate your expected salary based on industry trends,
              experience, education, and job market data.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <PredictionForm />
            <ResultCard />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Salary Charts */}
      <Charts />

      {/* Analytics Dashboard */}
      <AnalyticsDashboard />

      {/* About */}
      <AboutSection />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;