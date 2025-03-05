import { useState, useEffect } from "react";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedUser = localStorage.getItem("loginState");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      navigate("/"); // or wherever you want to redirect logged-in users
    }
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    email: "string",
    password: "",
    phone_number: "string",
    input_code: 0,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://3.111.196.92:8020/api/v1/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.message === "Incorrect Username") {
        setError("Invalid username");
        return;
      }

      if (data.message === "Incorrect Password") {
        setError("Invalid password");
        return;
      }

      if (data.message === "Successfully Logged in") {
        const loginState = { ...data, username: formData.username };
        setUser(loginState);
        localStorage.setItem("loginState", JSON.stringify(loginState));
        console.log("Login successful:", data);
      } else {
        setError("An unexpected error occurred");
      }

      console.log("Login successful:", data);
    } catch (err) {
      setError(err.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-96">
      <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
