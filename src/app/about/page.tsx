import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">About My Blog</h1>
        
        <div className="text-lg text-gray-600 leading-relaxed">
          <p className="mb-4 text-base md:text-lg">
            Welcome to my corner of the internet! I&apos;m passionate about sharing insights, stories and experiences 
            through this blog platform.
          </p>

          <p className='text-base md:text-lg'>
            Here you&apos;ll find thoughtful articles about technology, life experiences, and creative musings. 
            I strive to create content that informs, inspires and connects with readers like you.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-6 mt-8">
          <Link
            href="/contact" 
            className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
          <Link
            href="/blog" 
            className="px-4 sm:px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;