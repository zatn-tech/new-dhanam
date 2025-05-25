import React, { useState } from "react";
import Heading from "../components/Heading";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("http://api.dhanamschool.com/career/", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Your application has been submitted successfully!");
      } else {
        alert("Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <form  className="max-w-3xl my-16 mx-auto p-6 bg-gray-100 border rounded-lg shadow-lg">
      <div className="my-7">
      <Heading name={"Career Application Form"}/>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-medium mb-2">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium mb-2">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-lg font-medium mb-2">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Address */}
      <div className="mb-4">
        <label htmlFor="address" className="block text-lg font-medium mb-2">Address</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows="3"
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Position */}
      <div className="mb-4">
        <label htmlFor="position" className="block text-lg font-medium mb-2">Position Applied For</label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Experience */}
      <div className="mb-4">
        <label htmlFor="experience" className="block text-lg font-medium mb-2">Experience (in Years)</label>
        <input
          type="number"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Cover Letter */}
      <div className="mb-4">
        <label htmlFor="coverLetter" className="block text-lg font-medium mb-2">Cover Letter</label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Resume */}
      <div className="mb-4">
        <label htmlFor="resume" className="block text-lg font-medium mb-2">Upload Resume</label>
        <input
          type="file"
          id="resume"
          name="resume"
          onChange={handleFileChange}
          required
          className="w-full"
        />
      </div>

      {/* Submit Button */}
      <button
      onClick={handleSubmit}
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Submit Application
      </button>
    </form>
  );
};

export default Career;
