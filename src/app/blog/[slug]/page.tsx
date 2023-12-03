import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { readFile } from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';
import Badge from '~/components/badge';
import ExternalLink from '~/components/external-link';
import RenderMDX from '~/components/mdx';
import PostStructuredData from '~/components/seo/post-structured-data';
import ShareCard from '~/components/share-card';
import FadeInSection from '~/components/fade-in-section';
import { BlogMetadata } from '../types';

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
      <header className="pt-8 sm:pt-16 w-constraint">
        <div className="flex flex-col md:flex-row gap-4">
          <FadeInSection className="flex-[3] flex flex-col max-h-[70vh]">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              width={512}
              height={300}
              className="rounded-md shadow-lg w-full h-full object-cover"
            />
            <p className="mt-4 text-gray-500">
              Photo by{' '}
              <ExternalLink href={heroImageCreditUrl}>
                {heroImageCreditName}
              </ExternalLink>
            </p>
          </FadeInSection>
          <FadeInSection className="flex-[2] flex flex-col gap-4">
            <h1 className="text-3xl md:text-5xl font-medium text-gray-900">
              {title}
            </h1>
            <div className="flex items-center gap-6 md:flex-col md:items-start md:gap-2">
              <p className="md:text-xl text-gray-700">
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <Badge label={category} />
            </div>
          </FadeInSection>
        </div>
        <FadeInSection className="mt-6">
          <p className="font-sans font-light text-lg md:text-xl leading-relaxed text-gray-900">
            {description}
          </p>
        </FadeInSection>
      </header>
      <main className="w-constraint text-gray-700">
        <hr className="my-12" />
        <article>
          <RenderMDX source={source} />
        </article>
        <div className="flex flex-col-reverse justify-start md:flex-row md:justify-between border-t pt-12 mt-16">
          <FadeInSection className="mt-12 md:mt-0 md:pr-6">
            <h3 className="text-3xl font-bold">Read More</h3>
            <p className="text-xl mt-8">
              If you found this article helpful, you may like to read{' '}
              <Link className="text-red-400 underline" href="/blog">
                more
              </Link>
            </p>
          </FadeInSection>
          <FadeInSection>
            <ShareCard
              title={title}
              author="Siddharth Borderwala"
              url={shareUrl}
            />
          </FadeInSection>
        </div>
      </main>
    </>
  );
};

export default BlogPost;
