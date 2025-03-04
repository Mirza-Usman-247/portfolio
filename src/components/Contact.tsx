"use client";
import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Toaster } from "./ui/sonner";
import { contactFormSchema } from "../lib/contactSchema";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  const submit = async (values: z.infer<typeof contactFormSchema>) => {
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        toast.error("Failed to send message. Please try again.");
      } else {
        toast.success("Message sent successfully!");
      }
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="w-full mt-8">
      <Toaster />
      <div className="grid md:grid-cols-2 gap-12 ">
        <div className="space-y-6">
          <div className="text-white space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">Lets chat.</h1>
            <h2 className="text-4xl md:text-5xl font-bold">Tell me to wanna</h2>
            <h2 className="text-4xl md:text-5xl font-bold">work with me</h2>
          </div>
          <p className="text-[#5D5D5D] text-lg mt-2 ml-2">
            let&apos;s create something together ⭐
          </p>
          <div className="flex justify-evenly mt-8">
            <div className="w-11 h-11 flex items-center justify-center rounded border border-[#2F2F2F] text-[#5D5D5D] hover:text-white hover:border-[#FFFFFF] transition-all ease-in-out duration-300 cursor-pointer">
              <IoMailOutline className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-lg text-[#5D5D5D]">Mail me at</h3>
              <a
                href="mailto:usmanbaig2008@gmail.com"
                  className="text-lg text-[#5D5D5D] font-bold cursor-pointer hover:text-blue-500"
              >
                usmanbaig2008@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className=" border border-[#2F2F2F] rounded-lg py-6 px-3 bg-[#121212] mt-5 md:mt-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(submit)}>
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-[#0A0A0A] border border-[#2F2F2F] placeholder:text-[#8F8F8F] mt-2 rounded-xl text-[#8F8F8F] pl-2 w-full h-10"
                          placeholder="firstname..."
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 my-0" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-[#0A0A0A] border border-[#2F2F2F] mt-4 placeholder:text-[#8F8F8F] rounded-xl text-[#8F8F8F] pl-2 w-full h-10"
                          placeholder="lastname..."
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 my-0" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-[#0A0A0A] border border-[#2F2F2F] mt-4 placeholder:text-[#8F8F8F] rounded-xl text-[#8F8F8F] pl-2 w-full h-10"
                          placeholder="email..."
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 my-0" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="bg-[#0A0A0A] border border-[#2F2F2F] mt-4 placeholder:text-[#8F8F8F] rounded-xl text-[#8F8F8F] pl-2 w-full min-h-[120px]"
                          placeholder="message..."
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 my-0" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant={"default"}
                  className="text-black bg-white w-full rounded-xl mt-8 cursor-pointer hover:bg-white"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

