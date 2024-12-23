import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen py-10 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <div className="bg-white rounded-lg shadow p-6">
          <form className="space-y-6">
            <div>
              <Label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </Label>
              <Input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
                required
              />
            </div>

            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
                required
              />
            </div>

            <div>
              <Label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </Label>
              <textarea
                id="message"
                rows={5}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Send Message
            </Button>
          </form>

          <div className="mt-8 border-t pt-8">
            <h2 className="text-xl font-semibold mb-4">
              Other Ways to Connect
            </h2>
            <div className="space-y-4">
              <p className="text-sm">
                <span className="font-medium">Email:</span>{" "}
                syedanabila33@gmail.com
              </p>
              <div className="flex flex-wrap text-sm">
                <p className="font-medium">Social Media:</p>
                <a href="/" target="_blank" className="text-blue-600 hover:underline ml-2">
                  Twitter
                </a>
                <a href="www.linkedin.com/in/nabila-bannay-khan-a38b57313" target="_blank" className="text-blue-600 hover:underline ml-2">
                  LinkedIn
                </a>
                <a href="https://github.com/SyedaNabila559" target="_blank" className="text-blue-600 hover:underline ml-2">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;