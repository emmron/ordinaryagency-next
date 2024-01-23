import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

interface BlogSliderProps {
  posts: BlogPost[];
}

const BlogSlider: React.FC<BlogSliderProps> = ({ posts }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (posts && posts.length > 0) {
      setIsLoading(false);
    }
  }, [posts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Latest from the Blog</h2>
        <div className="relative flex items-center">
          <FaArrowAltCircleLeft className="absolute left-0 text-3xl text-gray-600 cursor-pointer" />
          <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
                <a className="snap-center shrink-0 w-80 bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                  <Image src={post.imageUrl} alt={post.title} width={320} height={192} objectFit="cover" className="w-full h-48" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-700 text-base mb-4">{post.excerpt}</p>
                    <div className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Read more</div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <FaArrowAltCircleRight className="absolute right-0 text-3xl text-gray-600 cursor-pointer" />
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" passHref>
            <a className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200">View all articles</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;