import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import useSiteMetadata from '../../hooks/use-site-metadata';

const siteTwitterHandle = 'sidborderwala';

const Meta = ({
  title,
  description,
  image,
  imageAlt,
  authorTwitterHandle,
  author,
  path,
}) => {
  const img = image || '/social-preview.png';
  const imgAltFinal = imageAlt || title;
  const { siteUrl } = useSiteMetadata();
  const url = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      {img && <meta name="image" content={img} />}

      <link rel="canonical" href={url} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {img && <meta property="og:image" content={img} />}
      {imgAltFinal && <meta property="og:image:alt" content={imgAltFinal} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={siteTwitterHandle} />
      <meta name="twitter:creator" content={authorTwitterHandle} />
      {img && <meta name="twitter:image" content={img} />}
      {imgAltFinal && <meta name="twitter:image:alt" content={imgAltFinal} />}
    </Helmet>
  );
};

Meta.defaultProps = {
  authorTwitterHandle: '@sidborderwala',
  author: 'Siddharth Borderwala',
  imageAlt: undefined,
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  authorTwitterHandle: PropTypes.string,
  path: PropTypes.string.isRequired,
};

export default Meta;
