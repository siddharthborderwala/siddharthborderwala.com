import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PostStructuredData = ({
  title,
  image,
  createdAt,
  authorName,
  authorURL,
}) => {
  return (
    <Helmet>
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
            url: authorURL,
          },
        })}
      </script>
    </Helmet>
  );
};

PostStructuredData.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorURL: PropTypes.string.isRequired,
};

export default PostStructuredData;
