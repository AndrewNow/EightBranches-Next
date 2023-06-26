import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const SEO = ({ title, description, image, url, keywords }) => {
  const siteName = 'Eight Branches College of Eastern Medicine';

  const seoImage = image ? image : 'https://i.imgur.com/oYDGbYr.png';
  const seoTitle = title ? `${title} | Eight Branches` : `Eight Branches`
  const seoUrl = url ? url : "https://www.eightbranches.ca/"
  
  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(',')} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#316C5F" />
      <link rel="canonical" href={seoUrl} />
      <link rel="icon" href="/favicon-32x32.png" />
      <meta charSet="UTF-8" />
    </Head>
  );
};

SEO.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string),
};

SEO.defaultProps = {
  keywords: [],
};

export default SEO;
