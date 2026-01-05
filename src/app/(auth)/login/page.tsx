"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    if (!validateForm()) return;

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Login failed.");
        return;
      }

      toast.success("Login successful!");
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (error) {
      toast.error("An unexpected error occurred.");
      console.error("Login error:", error);
    }
    setLoading(false)
  };

  return (
    <section className=" dark:bg-gray-900 min-h-screen flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-md bg-[#008dc0] rounded-lg shadow dark:bg-gray-800">
        <div className="p-6 space-y-6">
          <Link href="/" className="block text-3xl font-bold text-white mb-4 text-center">
            Code Shiksa
          </Link>
          <h1 className="text-xl font-bold text-white dark:text-white text-center">
            Sign in to your account
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-white dark:text-white">
                Your email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={`w-full p-2.5 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } bg-gray-50 text-gray-900 focus:ring-primary-600 focus:border-primary-600`}
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-white dark:text-white">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                className={`w-full p-2.5 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } bg-gray-50 text-gray-900 focus:ring-primary-600 focus:border-primary-600`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-white dark:text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 mr-2"
                />
                Remember me
              </label>
              <Link href="#" className="text-sm text-white font-medium text-primary-600 hover:underline dark:text-primary-500">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-5 text-black bg-white  rounded-lg text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary-300 cursor-pointer"
            >
              {loading ? "Sign in..." : "Sign in"}
            </button>

            <p className="text-sm font-light text-white dark:text-gray-400 text-center">
              Don’t have an account yet?{" "}
              <Link
                href="/register"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
