"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ServiceType } from "@/lib/types";
import { getIcon } from "@/lib/utils/icon-map";

interface ContactFormProps {
  serviceTypes: ServiceType[];
  locale: string;
  dict: any;
}

export function ContactForm({ serviceTypes, locale, dict }: ContactFormProps) {
  const [selectedService, setSelectedService] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", { ...formData, serviceType: selectedService });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">{dict.contact.form.title}</CardTitle>
        <CardDescription className="text-base">
          {dict.contact.form.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Type Selection */}
          <div>
            <Label className="text-base font-semibold mb-3 block">
              {dict.contact.form.serviceQuestion}
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceTypes.map((service) => {
                const Icon = getIcon(service.icon);
                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      selectedService === service.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className={`h-5 w-5 mt-0.5 ${
                        selectedService === service.id ? "text-primary" : "text-muted-foreground"
                      }`} />
                      <div>
                        <h4 className={`font-medium ${
                          selectedService === service.id ? "text-primary" : "text-foreground"
                        }`}>
                          {service.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">{dict.contact.form.fields.name} *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">{dict.contact.form.fields.email} *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">{dict.contact.form.fields.phone}</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="company">{dict.contact.form.fields.company}</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message">{dict.contact.form.fields.message} *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="mt-1"
              placeholder={dict.contact.form.fields.messagePlaceholder}
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            {dict.contact.form.submitButton}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            {dict.contact.form.privacyText}{" "}
            <Link href={`/${locale}/integritetspolicy`} className="text-primary hover:underline">
              {dict.contact.form.privacyLink}
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}