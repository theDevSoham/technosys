"use client";

import { Form } from "@/types/Contact";
import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";
import { theme } from "@/assets/theme";

interface FormComponentProps {
  formConfig: Form;
}

const FormComponent: React.FC<FormComponentProps> = ({ formConfig }) => {
  const { title, fields, button } = formConfig;
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object from the form
    const formData = new FormData(e.currentTarget);
    // Convert it to a plain object
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      setLoading(true);
      const response = await fetch("/api/submit_form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const text = await response.text();

      // ✅ Handle WordPress "0" or success
      if (!response.ok || text.trim() === "0") {
        throw new Error("Form submission failed (invalid nonce or data).");
      }

      console.log("✅ Form submitted successfully:", text);
      setIsSubmitted(true);
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("Something went wrong while submitting. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {title && (
        <h2 className="text-2xl font-semibold text-heading text-left">
          {title}
        </h2>
      )}

      {isSubmitted ? (
        <div className="w-full py-10 px-5">
          <p className={`${theme.typography.techno_20_semibold}`}>
            Thank you for the submission. We'd get back to you ASAP!
          </p>
        </div>
      ) : (
        <form className="w-full flex flex-wrap" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div
              key={field.name}
              className={`${
                field.layout === "full" ? "w-full" : "lg:w-1/2 w-full"
              } px-4 my-2`}
            >
              <label
                htmlFor={field.name}
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body rounded-2xl"
                  rows={4}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body rounded-full"
                />
              )}
            </div>
          ))}

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center mt-4 px-4">
            <AnimatedButton type="submit" loading={loading}>
              {button.text}
            </AnimatedButton>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormComponent;
