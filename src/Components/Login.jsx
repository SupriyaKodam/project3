import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Email validation
  const validateEmail = (value) => {
    setEmail(value);
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address.');
      setIsFormValid(false);
    } else {
      setEmailError('');
      validateForm(value, password);
    }
  };

  // Password validation
  const validatePassword = (value) => {
    setPassword(value);
    if (!passwordRegex.test(value)) {
      setPasswordError(
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.'
      );
      setIsFormValid(false);
    } else {
      setPasswordError('');
      validateForm(email, value);
    }
  };

  // Form validation
  const validateForm = (emailValue, passwordValue) => {
    if (emailRegex.test(emailValue) && passwordRegex.test(passwordValue)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Login successful!');
      // Redirect or handle login logic here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              className={`w-full px-4 py-2 border ${
                emailError ? 'border-red-500' : 'border-gray-300'
              } rounded-md`}
              placeholder="Enter your email"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              className={`w-full px-4 py-2 border ${
                passwordError ? 'border-red-500' : 'border-gray-300'
              } rounded-md`}
              placeholder="Enter your password"
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white ${
              isFormValid
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-gray-400 cursor-not-allowed'
            } transition`}
            disabled={!isFormValid}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
