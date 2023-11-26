import React from 'react';
import PropTypes from 'prop-types';

const PostStructuredData: React.FC<{
  title: string;
  image: string;
  createdAt: string;
  authorName: string;
}> = ({ title, image, createdAt, authorName }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        image: [image],
        datePublished: createdAt,
        author: {
          '@type': 'Person',
          name: authorName,
        },
      })}
    </script>
  );
};

export default PostStructuredData;
