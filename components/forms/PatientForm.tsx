"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormFeild from "../CustomFormFeild";
import { useState } from "react";
import SubmitButton from "../SubmitButton";
import { userValidation } from "@/lib/validation";
import Router from "next/router";

export enum FormFieldType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  SELECT = "select",
  DATE_PICKER = "datePicker",
  PHONE_INPUT = "phoneInput",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof userValidation>>({
    resolver: zodResolver(userValidation),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(
    { username, email, phone }: z.infer<typeof userValidation>
  ) {
    console.log(username, email, phone);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    try {
      // const userData = {username, email, phone};
      // const user = await createUser(userData)
      // if(user) Router.push(`/patient/${user.$id}/register`)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-4">
          <h1 className="header">Hi there 👋🏽</h1>
          <p className="text-dark-700">Schedule Your first appointment</p>
        </section>
        <CustomFormFeild
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="username"
          label="Username"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormFeild
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormFeild
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name="phone"
          label="Phone number"
          placeholder="phone number"
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
