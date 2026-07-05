import { motion } from "framer-motion";
import { useState } from "react";
import api from "../services/api";

function PredictionForm() {
  const [formData, setFormData] = useState({
    job_title: "",
    experience_years: "",
    education_level: "Bachelor",
    skills_count: "",
    industry: "",
    company_size: "",
    location: "",
    remote_work: "No",
    certifications: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await api.post("/predict", formData);

      setPrediction(response.data.predicted_salary);
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.error ||
          "Prediction Failed! Please check your backend."
      );
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="card p-8"
    >
      <h2 className="text-3xl font-bold text-[#0F5132] mb-8">
        Predict Your Salary
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5"
      >
        <input
          type="text"
          name="job_title"
          placeholder="Job Title"
          className="border rounded-xl p-4"
          value={formData.job_title}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="experience_years"
          placeholder="Years of Experience"
          className="border rounded-xl p-4"
          value={formData.experience_years}
          onChange={handleChange}
          required
        />

        <select
          name="education_level"
          className="border rounded-xl p-4"
          value={formData.education_level}
          onChange={handleChange}
        >
          <option>Bachelor</option>
          <option>Master</option>
          <option>PhD</option>
          <option>Diploma</option>
        </select>

        <input
          type="number"
          name="skills_count"
          placeholder="Skills Count"
          className="border rounded-xl p-4"
          value={formData.skills_count}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="industry"
          placeholder="Industry"
          className="border rounded-xl p-4"
          value={formData.industry}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company_size"
          placeholder="Company Size"
          className="border rounded-xl p-4"
          value={formData.company_size}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="border rounded-xl p-4"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <select
          name="remote_work"
          className="border rounded-xl p-4"
          value={formData.remote_work}
          onChange={handleChange}
        >
          <option>Yes</option>
          <option>No</option>
          <option>Hybrid</option>
        </select>

        <input
          type="number"
          name="certifications"
          placeholder="Certifications"
          className="border rounded-xl p-4"
          value={formData.certifications}
          onChange={handleChange}
          required
        />

        <div className="md:col-span-2">
          <button
            type="submit"
            className="primary-btn w-full"
          >
            {loading ? "Predicting..." : "Predict Salary"}
          </button>
        </div>
      </form>

      {prediction !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 bg-green-50 border border-green-300 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-green-700">
            Predicted Salary
          </h3>

          <p className="text-5xl font-extrabold mt-4 text-[#0F5132]">
            SAR {prediction.toLocaleString()}
          </p>

          <p className="mt-3 text-gray-600">
            Estimated annual salary based on your profile.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default PredictionForm;