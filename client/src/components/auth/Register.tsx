"use client";
import type { Register } from "@/types/user";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import api from "@/utils/api";
import { useRouter } from "next/navigation";

// ✅ Separate schemas
const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

// ✅ Different initial values
const signupInitial: Register = {
  name: "",
  email: "",
  password: "",
};

const signinInitial = {
  email: "",
  password: "",
};

export default function Register() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const router = useRouter();

  const Submit = async (
    values: any,
    { resetForm }: FormikHelpers<any>
  ) => {
    try {
      if (activeTab === "signup") {
        await api.post("/auth/signup", values);
        toast.success("Account created! Please sign in.");
        setActiveTab("signin");
      } else {
        const res = await api.post("/auth/signin", values);
        localStorage.setItem("token", res.data.token);
        toast.success("Signed in successfully!");
        router.push("/cart"); // redirect after login
      }
      resetForm();
    } catch (err: any) {
      const msg = err.response?.data?.message || "Something went wrong";
      toast.error(msg);
    }
  };

  return (
    <div className="w-full py-8 flex items-center justify-center ">
      <div className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-md">
        <h1 className="text-xl font-semibold text-center text-gray-800">
          Welcome
        </h1>
        <p className="text-sm text-center text-gray-500 mb-6">
          {activeTab === "signin"
            ? "Sign in to start bidding or manage your auctions"
            : "Create your account to start bidding"}
        </p>

        {/* Tabs */}
        <div className="flex mb-6 rounded-full bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => setActiveTab("signin")}
            className={`flex-1 py-2 rounded-full text-sm font-medium ${
              activeTab === "signin"
                ? "bg-white shadow text-gray-800"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-2 rounded-full text-sm font-medium ${
              activeTab === "signup"
                ? "bg-white shadow text-gray-800"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        <Formik
          validationSchema={activeTab === "signup" ? SignupSchema : SigninSchema}
          initialValues={activeTab === "signup" ? signupInitial : signinInitial}
          enableReinitialize
          onSubmit={Submit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {activeTab === "signup" && (
                <>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full border px-4 py-2 rounded-lg text-sm outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </>
              )}

              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border px-4 py-2 rounded-lg text-sm outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border px-4 py-2 rounded-lg text-sm outline-none"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-300 to-blue-500 text-white py-2 rounded-lg text-sm font-medium disabled:opacity-50"
              >
                {isSubmitting
                  ? activeTab === "signup"
                    ? "Creating account..."
                    : "Signing in..."
                  : activeTab === "signup"
                  ? "Sign Up"
                  : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>

        <ToastContainer />
      </div>
    </div>
  );
}
