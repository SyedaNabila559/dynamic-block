"use client";

import React, { useEffect, useState } from "react";
import { assets, blog_data } from "../../../../public/Assets/assets"; // Ensure this path is correct
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Define the structure of the blog data
interface BlogData {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  date: number;
  category: string;
  author: string;
  author_img: StaticImageData;
  step1head: string;
  step1desc: string;
  step2head: string;
  step2desc: string;
  step3head: string;
  step3desc: string;
  conclusion: string;
}

const Blog = ({ params }: { params: Promise<{ id: string }> }) => {
  const [data, setData] = useState<BlogData | null>(null);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      // Unwrap the params promise and get the id
      const unwrappedParams = await params;
      const postId = Number(unwrappedParams.id);
      console.log("Post ID from params:", postId); // Debugging
      const post = blog_data.find((item) => item.id === postId);

      if (post) {
        console.log("Found post:", post); // Debugging
        setData(post);
      } else {
        console.log("Post not found"); // Debugging
      }
    };

    fetchData();
  }, [params]); // We depend on params as it may change

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [...prevComments, newComment.trim()]);
      setNewComment("");
    } else {
      alert("Please type something for comment");
    }
  };

  if (!data) {
    return (
      <div className="h-screen pb-[10rem] flex justify-center items-center text-4xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div>
      {/* Blog Post Section */}
      <div className="text-center px-3 pt-[5rem] pb-[10rem] bg-gray-400 dark:bg-slate-800">
        <div>
          <h1 className="text-3xl sm:text-5xl max-w-2xl mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            width={70}
            height={50}
            alt={data.author}
            className="mx-auto mt-7 border border-white rounded-full"
          />
          <p className="text-lg font-medium">{data.author}</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="mt-[-120px] md:mx-auto max-w-[60rem] mx-8 mb-10">
        <Image src={data.image} width={1000} height={720} alt={data.title} />
        <h1 className="text-3xl font-semibold my-[4rem]">Introduction:</h1>
        <p className="text-lg">{data.description}</p>

        <h3 className="mt-[3rem] mb-[2rem] text-xl font-semibold">{`Step 1: ${data.step1head}`}</h3>
        <p>{data.step1desc}</p>

        <h3 className="mt-[3rem] mb-[2rem] text-xl font-semibold">{`Step 2: ${data.step2head}`}</h3>
        <p>{data.step2desc}</p>

        <h3 className="mt-[3rem] mb-[2rem] text-xl font-semibold">{`Step 3: ${data.step3head}`}</h3>
        <p>{data.step3desc}</p>

        <h3 className="mt-[3rem] mb-[2rem] text-xl font-semibold">Conclusion</h3>
        <p>{data.conclusion}</p>
      </div>

      {/* Comments Section */}
      <div className="mx-auto max-w-[60rem] my-[6rem] px-8 md:px-0">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <ul className="mt-4 space-y-4">
          {comments.map((comment, index) => (
            <li key={index} className="p-4 bg-gray-100 dark:bg-gray-700 rounded shadow">
              {comment}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Write your comment here..."
            rows={4}
          />
          <Button
            onClick={handleAddComment}
            className="mt-3 px-4 py-6 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Add Comment
          </Button>
        </div>
      </div>

      {/* Share on Social Media Section */}
      <div className="mx-auto max-w-[60rem] my-[6rem] px-8 md:px-0">
        <h2 className="text-2xl font-medium">Share this article on social media</h2>
        <div className="flex mt-4">
          <Image
            className="hover:scale-105 transition-all duration-300 cursor-pointer"
            src={assets.facebook_icon}
            width={50}
            alt="facebook"
          />
          <Image
            className="hover:scale-105 transition-all duration-300 cursor-pointer"
            src={assets.googleplus_icon}
            width={50}
            alt="googleplus"
          />
          <Image
            className="hover:scale-105 transition-all duration-300 cursor-pointer"
            src={assets.twitter_icon}
            width={50}
            alt="twitter"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;

