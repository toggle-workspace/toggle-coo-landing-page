"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Enter a valid email address"),
  companySize: z.string().min(1, "Select a company size"),
  role: z.string().min(1, "Select a role"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const TESTIMONIAL = {
  quote:
    "This platform has revolutionized our development workflow. The productivity gains have been incredible.",
  name: "Alex Chen",
  role: "Lead Developer",
  avatar:
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
  logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
};

export function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companySize: "",
      role: "",
      message: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    console.log(values);
  }

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Form + Testimonial */}
          <Card
            variant="default"
            className="grid max-w-7xl grid-cols-1 lg:grid-cols-2"
          >
            {/* Form */}
            <div className="border-b p-8 lg:border-r lg:border-b-0">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid grid-cols-2 gap-x-3 gap-y-6"
                >
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="col-span-2 sm:col-span-1">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Bruce" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="col-span-2 sm:col-span-1">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Wayne" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
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
                    name="companySize"
                    render={({ field }) => (
                      <FormItem className="col-span-2 sm:col-span-1">
                        <FormLabel>Company size</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a company size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              "1-10",
                              "11-50",
                              "51-100",
                              "101-500",
                              "501-1000",
                            ].map((s) => (
                              <SelectItem key={s} value={s}>
                                {s}
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
                    name="role"
                    render={({ field }) => (
                      <FormItem className="col-span-2 sm:col-span-1">
                        <FormLabel>Role</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {["CEO", "CTO", "CFO", "Other"].map((r) => (
                              <SelectItem key={r} value={r}>
                                {r}
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
                      <FormItem className="col-span-2">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            className="min-h-32"
                            placeholder="Share more about your use case, product, tech stack and what you want to accomplish"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="col-span-2">
                    Continue <ArrowRight aria-hidden="true" />
                  </Button>
                </form>
              </Form>
            </div>

            {/* Testimonial */}
            <div className="flex h-full flex-col justify-between gap-12 p-8">
              <div className="flex items-center gap-3">
                <img
                  alt="Company logo"
                  className="h-6 w-auto object-contain md:h-8 dark:invert"
                  src={TESTIMONIAL.logo}
                />
              </div>
              <div className="space-y-6">
                <blockquote className="leading-snug text-muted-foreground sm:text-lg lg:max-w-md">
                  &ldquo;{TESTIMONIAL.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <Image
                    alt={TESTIMONIAL.name}
                    width={36}
                    height={36}
                    className="size-9 rounded-full object-cover"
                    src={TESTIMONIAL.avatar}
                  />
                  <div>
                    <div className="text-sm font-medium">
                      {TESTIMONIAL.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {TESTIMONIAL.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
