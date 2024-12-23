import Image from "next/image";
import React from "react";
import { assets } from "../../public/Assets/assets";
import Link from "next/link";

interface BlogItemsPar {
  title: string;
  description: string;
  image: string;
  category: string;
  id: number;
}

const BlogItems = ({ image, title, description, category, id }: BlogItemsPar) => {
  return (
    <div className="flex justify-center my-14">
      <div className="max-w-[27rem] sm:max-w-[22rem] bg-white border border-black hover:shadow-xl transition-all duration-300  dark:bg-slate-800 hover:scale-105">
        <Link href={`/blog/${id}`}>
          <Image
            src={image}
            width={400}
            height={400}
            alt="Blog image"
            className="border-b border-black"
          />
        </Link>
        <p className="ml-5 mt-3 text-2xl border-b-2 border-black font-bold inline-block dark:text-white dark:border-white">
          {category}
        </p>
        <div className="p-5">
          <h4 className="mb-2 text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-200">
            {title}
          </h4>
          <p className="text-base mb-3 tracking-tight dark:text-gray-300">
            {description}
          </p>
        </div>
        {/* Updated Link */}
        <Link href={`/blog/${id}`} className="flex gap-4 pl-5 mb-3 font-semibold text-lg cursor-pointer dark:text-white">
          Read More
          <Image
            src={assets.arrow}
            width={25}
            height={10}
            alt="Arrow icon"
            className="dark:invert"
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogItems;
