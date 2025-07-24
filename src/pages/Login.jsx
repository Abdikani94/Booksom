import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    if (!email.endsWith("@gmail.com")) {
      setError("Email must end with @gmail.com");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin123";

    // ✅ ADMIN login
    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("isAuthenticated", "true");
      setAuth({ isAuthenticated: true, user: { name: "Admin", email }, isAdmin: true });
      navigate("/admin-dashboard");
    }

    // ✅ USER login
    else {
      localStorage.setItem("isAdmin", "false");
      localStorage.setItem("isAuthenticated", "true");
      setAuth({ isAuthenticated: true, user: { name: email.split("@")[0], email }, isAdmin: false });
      navigate("/"); // Go to home or books page
    }
  };

  return (
    <div className="pt-28 min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0c0f1f] px-4 py-12 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-[#1c2237] p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Login to Your Account
        </h2>

        {error && (
          <div className="bg-red-100 dark:bg-red-200 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 dark:text-white font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#101322] text-gray-900 dark:text-white rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-white font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#101322] text-gray-900 dark:text-white rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-700 dark:text-gray-300 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-red-500 font-semibold cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
