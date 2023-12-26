import React from 'react';
import { readFile, readdir } from 'fs/promises';

import FeaturedArticle from '~/components/featured-article';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { compileMDX } from 'next-mdx-remote/rsc';
import { BlogMetadata } from './types';
import { Metadata } from 'next';
import Link from 'next/link';
import path from 'path';
import Badge from '~/components/badge';
import FadeInSection from '~/components/fade-in-section';

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
  openGraph: {
    title: 'Blog | Siddharth Borderwala',
    description:
      'View all the blog posts by Siddharth Borderwala - a computer science undergrad and a full-stack web engineer specializing in the javascript ecosystem.',
    url: 'https://siddharthborderwala.com',
    type: 'website',
    images: [
      {
        url: 'https://siddharthborderwala.com/social-blog.png',
        width: 1900,
        height: 1000,
        alt: 'Siddharth Borderwala',
      },
    ],
  },
  twitter: {
    site: 'siddharthborderwala',
    card: 'summary_large_image',
    title: 'Blog | Siddharth Borderwala',
    description:
      'View all the blog posts by Siddharth Borderwala - a computer science undergrad and a full-stack web engineer specializing in the javascript ecosystem.',
    images: [
      {
        url: 'https://siddharthborderwala.com/social-blog.png',
        width: 1900,
        height: 1000,
        alt: 'Siddharth Borderwala',
      },
    ],
  },
};

const BlogPage = async () => {
  const posts = await getAllBlogPosts();

  const featuredArticle = posts[0];

  return (
    <main className="w-constraint pt-8">
      <h1 className="text-4xl font-bold">My Blog</h1>
      <FeaturedArticle
        slug={featuredArticle.slug}
        info={featuredArticle.info}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap mt-8 gap-2 md:gap-6">
        {posts.slice(1).map(({ info, slug }, index) => (
          <Link key={slug} href={`/blog/${slug}`} className="w-full">
            <FadeInSection delay={(index + 1) * 0.1}>
              <Image
                src={info.heroImage}
                alt={info.heroImageAlt}
                width={512}
                height={300}
                className="rounded shadow-sm w-full"
              />
              <h2 className="font-medium text-xl sm:text-2xl mt-4 text-gray-700">
                {info.title}
              </h2>
              <div className="flex justify-between items-center">
                <p className="py-2 text-lg text-gray-500">
                  {new Date(info.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <Badge label={info.category} />
              </div>
            </FadeInSection>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
