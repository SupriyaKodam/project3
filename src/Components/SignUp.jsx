import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  // Validation functions
  const validateFullName = (name) => /^[a-zA-Z\s]+$/.test(name);
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = "";
    if (name === "fullName" && !validateFullName(value)) {
      error = "Full Name can only contain alphabets.";
    }
    if (name === "email" && !validateEmail(value)) {
      error = "Please enter a valid email address.";
    }
    if (name === "password" && !validatePassword(value)) {
      error =
        "Password must be at least 8 characters long, include an uppercase, a lowercase, a number, and a special character.";
    }
    if (name === "confirmPassword" && value !== formData.password) {
      error = "Passwords do not match.";
    }
    if (name === "phone" && !validatePhone(value)) {
      error = "Phone number must be exactly 10 digits.";
    }
    setErrors({ ...errors, [name]: error });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields before showing the modal
    const newErrors = {};
    if (!validateFullName(formData.fullName)) {
      newErrors.fullName = "Full Name is required and can only contain alphabets.";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "A valid email is required.";
    }
    if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long, include an uppercase, a lowercase, a number, and a special character.";
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    setErrors(newErrors);

    // If no validation errors, show the success modal
    if (Object.keys(newErrors).length === 0) {
      setShowModal(true); // Show modal after successful sign up
    }
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-20 bg-gray-400">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-96 px-4 py-2 border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none`}
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg text-white ${
              Object.keys(errors).length === 0 &&
              formData.fullName &&
              formData.email &&
              formData.password &&
              formData.confirmPassword &&
              formData.phone
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={
              Object.keys(errors).length > 0 ||
              !formData.fullName ||
              !formData.email ||
              !formData.password ||
              !formData.confirmPassword ||
              !formData.phone
            }
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal} // Close the modal if clicked outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <h3 className="text-lg font-bold mb-4">Sign-Up Successful!</h3>
            <p className="mb-4">Thank you for signing up. You can now log in to your account.</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
