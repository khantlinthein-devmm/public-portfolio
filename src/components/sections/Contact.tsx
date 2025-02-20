"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: unknown;
}

interface InputChangeEvent {
  target: {
    name: string;
    value: string;
  };
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "";
      const templateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || "";
      const userID = process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID || "";

      await emailjs.send(serviceID, templateID, formData, userID);

      // On Success
      setStatusMessage("Message send successfully! 🎉");
      setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
    } catch (error) {
      // On error
      setStatusMessage("Failed to send message.Please try again. ❌ ");
      
    } finally {
    }
    setIsLoading(false);
  };
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
            Get In Touch
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as
                possibe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-16" onSubmit={handleSubmit}>
                <div className="grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      name="name"
                      id="name"
                      value={formData.name}
                      placeholder="Your name"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      name="email"
                      id="email"
                      value={formData.email}
                      placeholder="Your email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    placeholder="Subject"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message"> Message </label>
                  <Textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    placeholder="Your message "
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>

                {statusMessage && <p>{statusMessage}</p>}
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="mb-4 text-lg">Or reach out directly:</p>
            <p className="text-primary">khantlinthein@outlook.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
