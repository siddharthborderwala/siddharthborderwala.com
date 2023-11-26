import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { readFile } from 'fs/promises';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import Badge from '~/components/badge';
import ExternalLink from '~/components/external-link';
import RenderMDX from '~/components/mdx';
import PostStructuredData from '~/components/seo/post-structured-data';
import Link from 'next/link';
import ShareCard from '~/components/share-card';
import { BlogMetadata } from '../types';
import path from 'path';

type Props = {
  params: { slug: string };
};

const contentDir = path.join(process.cwd(), './content');

const getBlogContents = async (slug: string) => {
  try {
    const result = await readFile(
      path.join(contentDir, `${slug}/index.mdx`),
      'utf-8'
    );
    return result;
  } catch (e) {
    return null;
  }
};

const getBlogFrontmatter = async (source: string) => {
  const { frontmatter } = await compileMDX<BlogMetadata>({
    source,
    options: {
      parseFrontmatter: true,
    },
  });

  return frontmatter;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const source = await getBlogContents(params.slug);

  if (!source) {
    notFound();
  }

  const frontmatter = await getBlogFrontmatter(source);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      images: [
        {
          url: frontmatter.heroImage,
          alt: frontmatter.heroImageAlt,
        },
      ],
    },
  };
}

const BlogPost = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const source = await getBlogContents(params.slug);

  if (!source) {
    notFound();
  }

  const {
    title,
    date,
    category,
    description,
    heroImage,
    heroImageAlt,
    heroImageCreditName,
    heroImageCreditUrl,
  } = await getBlogFrontmatter(source);

  const shareUrl = `${process.env.NEXT_PUBLIC_ORIGIN}/blog/${params.slug}`;

  return (
    <>
      <PostStructuredData
        title={title}
        image={heroImage}
        createdAt={new Date(date).toISOString()}
        authorName={'Siddharth Borderwala'}
      />
      <header className="mt-8 md:mt-10 w-constraint">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-700">
          {title}
        </h1>
        <div className="flex flex-col sm:flex-row items-start md:items-center mt-3 md:mt-4">
          <p className="md:text-xl text-gray-600 mr-0 sm:mr-4 md:mr-6 mb-2 md:mb-0">
            {date}
          </p>
          <Badge label={category} />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-6">
          {description}
        </p>
        <Image
          src={heroImage}
          alt={heroImageAlt}
          width={512}
          height={300}
          className="mt-6 rounded-md shadow-lg max-h-[50vh]"
        />
        <p className="mt-4 text-gray-500">
          Photo by{' '}
          <ExternalLink href={heroImageCreditUrl}>
            {heroImageCreditName}
          </ExternalLink>
        </p>
      </header>
      <main className="w-constraint text-gray-700 mt-8">
        <article>
          <RenderMDX source={source} />
        </article>
        <div className="flex flex-col-reverse justify-start md:flex-row md:justify-between border-t pt-12 mt-16">
          <div className="mt-12 md:mt-0 md:pr-6">
            <h3 className="text-3xl font-bold">Read More</h3>
            <p className="text-xl mt-8">
              If you found this article helpful, you may like to read{' '}
              <Link className="text-red-400 underline" href="/blog">
                more
              </Link>
            </p>
          </div>
          <ShareCard
            title={title}
            author="Siddharth Borderwala"
            url={shareUrl}
          />
        </div>
      </main>
    </>
  );
};

export default BlogPost;
