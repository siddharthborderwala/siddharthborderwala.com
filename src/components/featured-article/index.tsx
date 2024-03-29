import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '../badge';
import FadeInSection from '../fade-in-section';

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
      <FadeInSection className="mt-8 md:mt-12">
        <div className="flex flex-col md:flex-row">
          <Image
            className="relative rounded shadow-md md:min-h-[40vh] flex-1"
            src={info.heroImage}
            alt={info.heroImageAlt}
            width={512}
            height={300}
          />
          <div className="md:ml-8 mt-4 md:mt-0 md:max-w-[35%] flex-shrink-0">
            <p className="uppercase font-bold text-gray-500 tracking-wider ml-1">
              featured article
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mt-2 md:mt-4">
              {info.title}
            </h2>
            <div className="flex flex-row md:flex-col items-center md:items-start mt-3 md:mt-4">
              <p className="md:text-xl text-gray-600 mr-5 md:mr-0 md:mb-6">
                {new Date(info.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <Badge label={info.category} />
            </div>
          </div>
        </div>
        <p className="text-gray-900 font-light text-lg leading-relaxed md:text-xl mt-4 md:mt-6">
          {info.description}
        </p>
      </FadeInSection>
    </Link>
  );
};

export default FeaturedArticle;
