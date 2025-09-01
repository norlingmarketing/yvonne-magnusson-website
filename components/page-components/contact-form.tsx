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
}

export function ContactForm({ serviceTypes }: ContactFormProps) {
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
        <CardTitle className="text-2xl">Skicka meddelande</CardTitle>
        <CardDescription className="text-base">
          Berätta om era behov så återkommer jag snarast för att boka ett introduktionssamtal.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Type Selection */}
          <div>
            <Label className="text-base font-semibold mb-3 block">
              Vad kan jag hjälpa er med?
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
              <Label htmlFor="name">Namn *</Label>
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
              <Label htmlFor="email">E-post *</Label>
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
              <Label htmlFor="phone">Telefon</Label>
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
              <Label htmlFor="company">Företag</Label>
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
            <Label htmlFor="message">Meddelande *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="mt-1"
              placeholder="Berätta kort om era utmaningar och vad ni söker hjälp med..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Skicka meddelande
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            Genom att skicka formuläret godkänner du vår{" "}
            <Link href="/integritetspolicy" className="text-primary hover:underline">
              integritetspolicy
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}