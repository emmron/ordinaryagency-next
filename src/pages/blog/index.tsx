import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import BlogSlider from 'src/app/components/BlogSlider';
import matter from 'gray-matter';

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
  // Render the BlogSlider with posts
  return <BlogSlider posts={posts} />;
};

export const getStaticProps = async () => {
  // Use Webpack's require.context to read all markdown files in src/posts
  const context = require.context('../../posts', true, /\.md$/);

  // Process each markdown file
  const postsPromises = context.keys().map(async (key: string) => {
    // Get the slug from the file name
    const slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
    // Use context to get the file contents
    const value = context(key);
    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(value.default);
    // Serialize the content to be rendered by next-mdx-remote
    const mdxContent = await serialize(content);
    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      imageUrl: data.imageUrl,
      content: mdxContent,
    };
  });

  // Wait for all markdown files to be processed
  const posts = await Promise.all(postsPromises);

  // Return the list of posts as props
  return {
    props: { posts },
  };
};

export default BlogIndex;