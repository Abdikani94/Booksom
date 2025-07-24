import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setAuth }) {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLengthValid = password.length >= 6;
  const isEmailValid = email.endsWith("@gmail.com");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (!isEmailValid) {
      setError("Email must end with @gmail.com");
      return;
    }

    if (!isLengthValid || !hasNumber || !hasLetter || !hasSpecialChar) {
      setError("Password is not strong enough.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setAuth({ isAuthenticated: true, user:{fullName, email}})
    navigate("/login");
  };

  return (
    <div className="pt-28 min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0c0f1f] px-4 py-12 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-[#1c2237] p-8 rounded-2xl shadow-2xl transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Create an Account
        </h2>

        {error && (
          <div className="bg-red-100 dark:bg-red-200 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 dark:text-white font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#101322] text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-white font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email (@gmail.com)"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#101322] text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-white font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter a strong password"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#101322] text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-white font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#101322] text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Password requirements */}
          <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mt-2">
            <p className={isLengthValid ? "text-green-500" : ""}>
              {isLengthValid ? "✔️" : "⬤"} At least 6 characters
            </p>
            <p className={hasLetter ? "text-green-500" : ""}>
              {hasLetter ? "✔️" : "⬤"} Includes a letter (a-z, A-Z)
            </p>
            <p className={hasNumber ? "text-green-500" : ""}>
              {hasNumber ? "✔️" : "⬤"} Includes a number (0–9)
            </p>
            <p className={hasSpecialChar ? "text-green-500" : ""}>
              {hasSpecialChar ? "✔️" : "⬤"} Special character (!@#$...)
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition duration-200 shadow-md"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-700 dark:text-gray-300 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-red-500 font-semibold cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
