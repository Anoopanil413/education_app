'use client'

import { PageProp } from "@/app/auth/page";
import React from "react";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";


interface FormInputs {
  Full_name: string;
  Email: string;
  Password: string;
}

const Form = ({ page }: { page: PageProp }) => {
  const { register, handleSubmit, formState: { errors }, } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log("hey there its availabel", data);

  const renderError = (error: FieldError | undefined) => {
    if (!error) return null;
    if (typeof error.message === 'string') {
      return <p role="alert" className="text-red-500 text-xs italic p-2 text-justify max-w-md">{error.message}</p>;
    }
    return null;
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full p-2 md:p-4 bg-blue-900 bg-opacity-35  rounded-lg border border-blue-950 shadow-2xl" >
        {page === "signup" && (
          <>
            <div className="my-6 w-full flex justify-center underline underline-offset-2">
              <h3>{page === 'signup' ? 'Sign Up' : 'Sign In'}</h3>

            </div>
            <div className="mb-4">

              <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input
                {...register("Full_name", { required: 'Full name is required', minLength: { value: 5, message: "Should contain minimum 5 charecters" }, maxLength: { value: 20, message: 'Full name cannot exceed 20 characters' } })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

              />
              {renderError(errors.Full_name)}
            </div>
          </>
        )}
        <div className="mb-4">

          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            {...register("Email", {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Enter a valid email address',
              },
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {renderError(errors.Email)}
        </div>

        <div className="mb-4">

          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            {...register("Password", {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
                message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number, and be at least 6 characters long',
              },
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          />
          {renderError(errors.Password)}
        </div>

        <div className="w-full flex justify-center">


          <button type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >{page}</button>
        </div>
      </form>
    </>
  );
};

export default Form;
