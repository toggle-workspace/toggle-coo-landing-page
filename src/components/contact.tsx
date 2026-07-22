"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const INTERESTS = [
  "Marketing Strategy",
  "Digital Marketing / Ads",
  "Branding & Design",
  "Web Design / Development",
  "Other",
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/wegems/",
    icon: "/brand/icon-linkedin.png",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: "/brand/icon-instagram.png",
  },
];

const contactFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.email("Enter a valid email address"),
  phone: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().optional(),
  agreement: z.literal(true, "Please accept the privacy policy and terms of service"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function ContactDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-xs font-semibold tracking-widest text-[#889091] uppercase">
        {label}
      </p>
      <p className="text-lg font-semibold text-[#292b2c]">{value}</p>
    </div>
  );
}

export function Contact({
  phone = "+1 949-012-3456",
  email = "hello@mywebsite.com",
  supportEmail = "support@mywebsite.com",
  address = "3 Rockaway St., New Rochelle, NY 10801",
}: {
  phone?: string;
  email?: string;
  supportEmail?: string;
  address?: string;
} = {}) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
      agreement: undefined,
    },
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(values: ContactFormValues) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="w-full">
      <div className="mx-auto max-w-325 px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact details */}
          <div className="flex flex-col gap-10">
            <ContactDetail label="Call us" value={phone} />
            <ContactDetail label="New business" value={email} />
            <ContactDetail label="Support" value={supportEmail} />
            <ContactDetail label="Location" value={address} />

            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <Image
                    src={s.icon}
                    alt=""
                    aria-hidden
                    width={40}
                    height={40}
                    className="size-10"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <Card variant="muted" className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-[#292b2c] md:text-4xl">
              Book free intro call
            </h2>
            <p className="mt-4 text-[#565b5d]">
              Reach out to discover how your brand can grow and perform
              better. Our specialist will get back to you within{" "}
              <strong className="font-semibold text-[#292b2c]">
                24 hours
              </strong>{" "}
              — no pressure, just expert advice.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-8 flex flex-col gap-6"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name*</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white"
                          placeholder="Bruce Wayne"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address*</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white"
                          placeholder="bruce@wayne.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white"
                          placeholder="+1 949-012-3456"
                          type="tel"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What are you interested in?</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder="Select a service…" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {INTERESTS.map((i) => (
                            <SelectItem key={i} value={i}>
                              {i}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-32 bg-white"
                          placeholder="Share more about your use case, product, tech stack and what you want to accomplish"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="agreement"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2.5">
                        <FormControl>
                          <Checkbox
                            checked={field.value ?? false}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          I agree to the privacy policy and terms of service.
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant="brand"
                  size="pill"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </Button>
                {status === "sent" && (
                  <p className="text-sm text-green-600">
                    Thanks! We&apos;ll be in touch soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
}
