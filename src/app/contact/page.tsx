"use client";
import React, { useEffect } from "react";
import { number, string, z, ZodType } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "dns";
import { userInfo } from "os";
import Head from "next/head";
type Inputs = {
  name: String;
  phone: Number;
  email: string;
  messag: string;
};
const Contact = () => {
  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );
  const Schema = z.object({
    name: z.string().min(1, { message: "Please Enter your Name" }),
    phone: z
      .number({
        invalid_type_error: "Mobile Number is required",
      })
      .min(1000000000, { message: "Number is small" })
      .max(9999999999, { message: "Number is not valid!" }),

    email: z
      .string()
      .min(1, { message: "Please Enter your Email Id" })
      .email("This is not a valid email."),
    message: z.string().min(1, { message: "Write and send Something" }),
    // .refine((e) => e === "abcd@fg.com", "This email is not in our database") // change logic
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      messag: "",
    },
    resolver: zodResolver(Schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  useEffect(() => {
    document.title = "contact";
  }, []);
  return (
    <div className="w-full h-screen bg-gray-700 flex justify-center p-40 items-center ">
      <Head>
        <title>Service</title>
      </Head>
      <form
        className="flex flex-col max-w-[600px]  h-full w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="pb-8  py-10">
          <label
            className="text-4xl font-bold inline border-b-4 border-pink-600 mt-10
           text-gray-300"
          >
            contact
          </label>
        </div>
        <input
          className=" mb-4 p-5"
          {...register("name")}
          type="text"
          placeholder="Enter your Name"
        />
        {errors.name?.message && (
          <p className="text-white mb-5 ">{errors.name?.message}</p>
        )}

        <input
          className="mb-4 p-5 text-white"
          {...register("email")}
          placeholder="Enter your Email"
        />
        {errors.email?.message && (
          <p className="mb-5 text-white">{errors.email?.message}</p>
        )}

        <input
          className="mb-4 p-5"
          {...register("phone", { valueAsNumber: true, required: true })}
          type="number"
          placeholder="Enter your Mobile Number"
        />
        {errors.phone?.message && (
          <p className="mb-5  text-white">{errors.phone?.message}</p>
        )}

        <div className="Message-input">
          <textarea
            className="mb-4 p-5"
            {...register("messag")}
            placeholder="Enter your Message here"
          />
          {errors.messag?.message && (
            <p className="mb-5 text-3xl text-red-700">
              {errors.messag?.message}
            </p>
          )}
        </div>
        <button
          className="text-white border-2 hover:bg-pink-600
           hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          type="submit"
          disabled={isSubmitting}
        >
          Lets Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
