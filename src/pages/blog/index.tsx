import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
}

interface BlogIndexProps {
  posts: BlogPost[];
}

const BlogIndex: React.FC<BlogIndexProps> = ({ posts }) => {
  return <div>Blog posts will be listed here.</div>;
};

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const postsPromises = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const mdxContent = await serialize(content);
    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      excerpt: data.excerpt,
      imageUrl: data.imageUrl,
      content: mdxContent,
    };
  });

  const posts = await Promise.all(postsPromises);

  return {
    props: { posts },
  };
};

export default BlogIndex;