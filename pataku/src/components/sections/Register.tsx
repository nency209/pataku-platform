"use client";
import type { Register } from "@/types/user";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

const initialValues: Register = {
  Firstname: "",
  Lastname: "",
  email: "",
  password: "",
};
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("email is required"),
  password: Yup.string().min(6, "password must be at least 6 character"),
});

export default function Register() {
  const Submit = (values: Register, { resetForm }: FormikHelpers<Register>) => {
    console.log("Form Submitted:", values);
    toast.success("Register Successfully");

    resetForm();
  };
  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-lg mx-auto bg-header   px-8  py-10 text-center">
        <h1 className="text-3xl  font-lato font-bold text-black my-2">
          Create Account
        </h1>
        <p className="text-muted text-sm font-light font-rubik my-8">
          Please Register using account detail bellow.
        </p>

        <Formik
          validationSchema={LoginSchema}
          initialValues={initialValues}
          onSubmit={Submit}
        >
          <Form>
            <div className=" py-8 px-6 text-left space-y-6">
              <div className="">
                <Field
                  type="Firstname"
                  name="Firstname"
                  className="w-full px-3 py-2 text-sm font-normal font-rubik outline-none placeholder-black bg-white"
                  placeholder="Firstname"
                />
                <ErrorMessage
                  name="Firstname"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="">
                <Field
                  type="Lastname"
                  name="Lastname"
                  className="w-full px-3 py-2 text-sm font-normal font-rubik outline-none placeholder-black bg-white"
                  placeholder="Lastname"
                />
                <ErrorMessage
                  name="Lastname"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="">
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 text-sm font-normal font-rubik outline-none placeholder-black bg-white"
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
                  className="w-full text-black outline-none px-3 py-2 text-sm placeholder-black font-normal font-rubik bg-white "
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="flex justify-between items-center pt-4  text-sm">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 .bg-primary-hover text-sm font-normal font-rubik"
                >
                  Create
                </button>
              </div>

              <div className="">
                <a
                  href="#"
                  className="text-black text-sm font-light font-rubik"
                >
                  Return to store
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
