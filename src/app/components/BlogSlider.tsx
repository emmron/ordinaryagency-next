import React from 'react';
import Link from 'next/link';

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
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Latest from the Blog</h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6">
          {posts.map((post) => (
            <div key={post.slug} className="snap-center shrink-0 w-80 bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 text-base mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <a className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Read more</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog">
            <a className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200">View all articles</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;