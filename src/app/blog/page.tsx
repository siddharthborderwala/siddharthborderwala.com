import React from 'react';
import { readFile, readdir } from 'fs/promises';

import FeaturedArticle from '~/components/featured-article';
import Image from 'next/image';
import { compileMDX } from 'next-mdx-remote/rsc';
import { BlogMetadata } from './types';
import { Metadata } from 'next';
import Link from 'next/link';
import path from 'path';
import Badge from '~/components/badge';

const contentDir = path.join(process.cwd(), './content');

const getAllBlogPosts = async () => {
  const files = await readdir(contentDir, {
    withFileTypes: true,
    encoding: 'utf-8',
  });

  const mdxFiles = files
    .map(file => {
      if (file.isDirectory()) {
        return {
          slug: file.name,
          path: path.join(file.path, file.name, 'index.mdx'),
        };
      }
      return null;
    })
    .filter(Boolean) as {
    slug: string;
    path: string;
  }[];

  const posts = await Promise.all(
    mdxFiles.map(async file => {
      const source = await readFile(file.path, 'utf-8');
      const { frontmatter } = await compileMDX<BlogMetadata>({
        source,
        options: {
          parseFrontmatter: true,
        },
      });
      return {
        info: frontmatter,
        slug: file.slug,
      };
    })
  );

  return posts.sort((a, b) => {
    // latest posts first
    return Date.parse(b.info.date) - Date.parse(a.info.date);
  });
};

export const metadata: Metadata = {
  title: 'Blog | Siddharth Borderwala',
  description:
    'View all the blog posts by Siddharth Borderwala - a computer science undergrad and a full-stack web engineer specializing in the javascript ecosystem.',
};

const BlogPage = async () => {
  const posts = await getAllBlogPosts();

  const featuredArticle = posts[0];

  return (
    <div>
      <main className="w-constraint pt-8">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <FeaturedArticle
          slug={featuredArticle.slug}
          info={featuredArticle.info}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap mt-8 gap-2 md:gap-6">
          {posts.slice(1).map(({ info, slug }) => (
            <Link key={slug} href={`/blog/${slug}`} className="w-full">
              <article>
                <Image
                  src={info.heroImage}
                  alt={info.heroImageAlt}
                  width={512}
                  height={300}
                  className="rounded shadow-sm w-full"
                />
                <h2 className="font-bold text-xl sm:text-2xl mt-4 text-gray-700">
                  {info.title}
                </h2>
                <div className="flex justify-between items-center">
                  <p className="py-2 text-lg text-gray-500">{info.date}</p>
                  <Badge label={info.category} />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
