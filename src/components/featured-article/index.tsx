import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '../badge';

const FeaturedArticle: React.FC<{
  slug: string;
  info: {
    heroImage: string;
    heroImageAlt: string;
    title: string;
    date: string;
    category: string;
    description: string;
  };
}> = ({ slug, info }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="mt-8 md:mt-12">
        <div className="flex flex-col md:flex-row">
          <Image
            src={info.heroImage}
            alt={info.heroImageAlt}
            className="rounded shadow-md w-full md:w-auto md:min-h-[40vh]"
          />
          <div className="md:ml-8 mt-4 md:mt-0 md:max-w-[35%]">
            <p className="uppercase font-bold text-gray-500 tracking-wider ml-1">
              featured article
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mt-2 md:mt-4">
              {info.title}
            </h2>
            <div className="flex flex-row md:flex-col items-center md:items-start mt-3 md:mt-4">
              <p className="md:text-xl text-gray-600 mr-5 md:mr-0 md:mb-6">
                {info.date}
              </p>
              <Badge label={info.category} />
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-lg md:text-xl mt-4 md:mt-6">
          {info.description}
        </p>
      </article>
    </Link>
  );
};

export default FeaturedArticle;
