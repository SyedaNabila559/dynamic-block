"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { blog_data } from "../../public/Assets/assets";
import BlogItems from "@/components/BlogItems";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/blog');
  }

  return (
    <div className="py-20">
      <h1 className="text-4xl sm:text-5xl font-bold text-center py-[2rem]">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 items-center gap-6 gap-y-10 xl:mx-24 px-6">
        {blog_data.slice(0, 7).map((items: BlogItem, index) => {
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
      <div className="flex justify-center mt-8">
        <Button onClick={handleClick} className="bg-black text-white hover:text-white dark:bg-slate-700 px-20 py-6 text-lg dark:hover:bg-slate-800">
          View All
        </Button>
      </div>
    </div>
  );
};

export default BlogList;