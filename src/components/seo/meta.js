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
  path,
}) => {
  const img = image || '';
  const imgAlt = imageAlt || '';
  const { siteUrl } = useSiteMetadata();
  const url = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {img && <meta name="image" content={img} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {img && <meta property="og:image" content={img} />}
      {imgAlt && <meta property="og:image:alt" content={imgAlt} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={siteTwitterHandle} />
      <meta name="twitter:creator" content={authorTwitterHandle} />
      {img && <meta name="twitter:image" content={img} />}
      {imgAlt && <meta name="twitter:image:alt" content={imgAlt} />}
    </Helmet>
  );
};

Meta.defaultProps = {
  authorTwitterHandle: 'sidborderwala',
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  authorTwitterHandle: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default Meta;
