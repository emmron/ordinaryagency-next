import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const BlogPost = ({ frontmatter, mdxSource }) => {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('src/posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('src/posts', slug + '.md'), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      mdxSource,
    },
  };
};

export default BlogPost;