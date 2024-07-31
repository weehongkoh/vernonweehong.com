"use client";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ContactFormProp } from "@/types/ContactForm";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormProp>();

  const onSubmit = async (data: ContactFormProp) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("Your message has been sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        progress: undefined,
        theme: "colored",
        className: "text-base",
      });
      reset();
    } else {
      toast.error("Failed to send your message. Please try again later.", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        progress: undefined,
        theme: "colored",
        className: "text-sm",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-3 lg:grid-cols-2"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register("name", { required: true })}
            type="text"
          />
          {errors.name && <p className="text-error">Name is required.</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            })}
            type="email"
          />
          {errors.email && (
            <p className="text-error">Valid email is required.</p>
          )}
        </div>

        <div className="lg:col-span-2">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            {...register("content", { required: true })}
            rows={5}
          ></textarea>
          {errors.content && <p className="text-error">Content is required.</p>}
        </div>

        <div className="lg:col-span-2">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
