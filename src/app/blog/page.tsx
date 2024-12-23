"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { blog_data } from "../../../public/Assets/assets";
import BlogItems from "@/components/BlogItems";
import { StaticImageData } from "next/image";

interface BlogItem {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    date: number;
    category: string;
  }

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className="py-20">
      <div className="flex justify-center flex-wrap gap-4">
        <Button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? "bg-black text-white  hover:text-white dark:bg-slate-600"
              : "bg-white text-black dark:bg-slate-800 dark:text-white hover:text-white dark:hover:bg-slate-700"
          }
        >
          All
        </Button>
        <Button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white  hover:text-white dark:bg-slate-600"
              : "bg-white text-black dark:bg-slate-800 dark:text-white hover:text-white dark:hover:bg-slate-700"
          }
        >
          Technology
        </Button>
        <Button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? "bg-black text-white  hover:text-white dark:bg-slate-600"
              : "bg-white text-black dark:bg-slate-800 dark:text-white hover:text-white dark:hover:bg-slate-700"
          }
        >
          Startup
        </Button>
        <Button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white  hover:text-white dark:bg-slate-600"
              : "bg-white text-black dark:bg-slate-800 dark:text-white hover:text-white dark:hover:bg-slate-700"
          }
        >
          Lifestyle
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 items-center gap-6 gap-y-10 xl:mx-24 px-6">
        {blog_data
          .filter((item: BlogItem) => (menu === "All" ? true : item.category === menu))
          .map((items: BlogItem, index) => {
            return (
              <BlogItems
                id={items.id}
                key={index}
                image={items.image.src}
                title={items.title}
                category={items.category}
                description={items.description}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;