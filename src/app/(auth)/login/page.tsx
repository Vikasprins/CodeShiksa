// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { toast } from "react-hot-toast"

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({ email: "", password: "" });
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     let formIsValid = true;
//     const newErrors = { email: "", password: "" };

//     // Simple email validation
//     if (!email.trim()) {
//       newErrors.email = "Email is required.";
//       formIsValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Email is invalid.";
//       formIsValid = false;
//     }

//     // Password validation
//     if (!password.trim()) {
//       newErrors.password = "Password is required.";
//       formIsValid = false;
//     }

//     setErrors(newErrors);

//     if (formIsValid) {
//       console.log("Form submitted:", { email, password });

//       // setEmail("");
//       // setPassword("");
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       if (data.success) {
//                       toast.success("Registration successful!");
//                       setEmail("");
//                       setPassword("");
//                       router.push("/");
//                   } else {
//                       toast.error(data.message || "Something went wrong.");
//                   }

//       if (!res.ok) {
//         setErrors(data.error || "Login failed");
//         return;
//       }

//     }
//   };

//   return (
//     <div>
//       <section className="bg-[#045e52] dark:bg-gray-900 ">
//         <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//           <Link
//             href="/"
//             className="flex items-center mb-6 text-3xl font-bold text-white"
//           >
//             Code Shiksa
//           </Link>
//           <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0 dark:bg-gray-800">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
//                 Sign in to your account
//               </h1>
//               <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//                 <div>
//                   <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                     Your email
//                   </label>
//                   <input
//                     type="text"
//                     name="email"
//                     className={`bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-300"
//                       } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
//                     placeholder="name@company.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   {errors.email && (
//                     <p className="mt-1 text-sm text-red-500">{errors.email}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="••••••••"
//                     className={`bg-gray-50 border ${errors.password ? "border-red-500" : "border-gray-300"
//                       } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   {errors.password && (
//                     <p className="mt-1 text-sm text-red-500">
//                       {errors.password}
//                     </p>
//                   )}
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-start">
//                     <input
//                       id="remember"
//                       type="checkbox"
//                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 cursor-pointer"
//                     />
//                     <label className="ml-2 text-sm text-gray-500 dark:text-gray-300">
//                       Remember me
//                     </label>
//                   </div>
//                   <Link
//                     href="#"
//                     className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
//                   >
//                     Forgot password?
//                   </Link>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full text-white bg-[#045e52] hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer"
//                 >
//                   Sign in
//                 </button>

//                 <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                   Don’t have an account yet?{" "}
//                   <Link
//                     href="/register"
//                     className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                   >
//                     Sign up
//                   </Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LoginPage;

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
    <section className="bg-[#045e52] dark:bg-gray-900 min-h-screen flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="p-6 space-y-6">
          <Link href="/" className="block text-3xl font-bold text-white mb-4 text-center">
            Code Shiksa
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white text-center">
            Sign in to your account
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
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
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
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
              <label className="flex items-center text-sm text-gray-500 dark:text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 mr-2"
                />
                Remember me
              </label>
              <Link href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-5 text-white bg-[#045e52] hover:bg-[#034940] rounded-lg text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary-300 cursor-pointer"
            >
              {loading ? "Sign in..." : "Sign in"}
            </button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
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
