import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For demo, store in localStorage
    localStorage.setItem("userLogin", JSON.stringify(loginData));
    console.log("Login Submitted:", loginData);

    // Redirect or show success (you can use navigate)
    alert("Login successful!");
    navigate("/");

    const handleLogout = () => {
      localStorage.removeItem("userLogin");
      navigate("/login");
    };
    localStorage.setItem("isLoggedIn", "true");
    navigate("/form"); // ✅ Do not go to "/"
  };

  return (
    <>
      <Header />

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="flex text-center mb-3">
            <p className="text-lg me-3">Create an Account!!</p>
            <a
              href="/signup"
              className="text-blue-500 hover:text-blue-700 text-xl"
            >
              Signup?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
