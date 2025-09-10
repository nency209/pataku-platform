"use client";
import type { Login } from "@/types/user";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

const initialValues: Login = {
  email: "",
  password: "",
};
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("email is required"),
  password: Yup.string().min(6, "password must be at least 6 character"),
});

export default function Login() {
  const Submit = (values: Login, { resetForm }: FormikHelpers<Login>) => {
    console.log("Form Submitted:", values);
    toast.success("Login Successfully");

    resetForm();
  };
  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-lg mx-auto bg-header   px-8  py-10 text-center">
        <h1 className="text-3xl  font-lato font-bold text-black my-2">Login</h1>
        <p className="text-muted text-sm font-light font-rubik my-8">
          Please login using account detail below.
        </p>

        <Formik
          validationSchema={LoginSchema}
          initialValues={initialValues}
          onSubmit={Submit}
        >
          <Form>
            <div className="bg-white shadow py-8 px-6 rounded  text-left space-y-6">
              <div className="">
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 text-sm font-normal font-rubik outline-none placeholder-black"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="">
                <Field
                  type="password"
                  name="password"
                  className="w-full text-black outline-none px-3 py-2 text-sm placeholder-black font-normal font-rubik "
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="flex justify-between items-center pt-4 px-3 text-sm">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 .bg-primary-hover text-sm font-normal font-rubik"
                >
                  Sign In
                </button>
                <a href="#" className="text-muted">
                  Forgot your password?
                </a>
              </div>

              <div className="px-3">
                <a
                  href="#"
                  className="text-black text-sm font-light font-rubik"
                >
                  Create account
                </a>
              </div>
            </div>
          </Form>
        </Formik>
        <ToastContainer />
      </div>
    </div>
  );
}
