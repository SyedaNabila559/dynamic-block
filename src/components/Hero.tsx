"use client";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";

interface FormValues {
  email: string;
}

const Hero = () => {
  const form = useForm<FormValues>();

  const handleSubmition = form.handleSubmit((data: FormValues): void => {
    console.log("Form submitted", data);
  });

  return (
    <div className="bg-gray-50 dark:bg-slate-900 py-[12rem] h-[42rem]">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold dark:text-white text-gray-900 sm:text-5xl md:text-6xl">
            Latest Blog
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl dark:text-gray-400 text-gray-500 sm:mt-4">
            Stay up to date with our latest articles, news, and updates.
            Subscribe to our newsletter for weekly insights delivered straight
            to your inbox.
          </p>

          <div className="mt-8 flex justify-center flex-col sm:flex-row items-center">
            <form
              onSubmit={handleSubmition}
              className="w-full max-w-md sm:flex"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full md:max-w-md px-4 py-5 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 sm:flex-1"
                required
                {...form.register("email")}
              />
              <div className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto">
                <Button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 py-5 border border-transparent text-base font-medium rounded-md text-white focus:outline-none dark:bg-slate-600 dark:hover:bg-slate-700"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;