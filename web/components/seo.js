import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const SEO = ({ title, description, image, url, keywords }) => {
  const siteName = 'Eight Branches College of Eastern Medicine';
  const siteDesc = description ? description : "Eight Branches Academy of Eastern Medicine is a Toronto based Acupuncture School that offers students a comprehensive education with a firm foundation in Traditional Chinese Medicine."
  const seoImage = image ? image : 'https://i.imgur.com/oYDGbYr.png';
  const seoTitle = title ? `${title} | Eight Branches` : `Eight Branches`
  const seoUrl = url ? url : "https://www.eightbranches.ca/"
  
  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={siteDesc} />
      <meta name="keywords" content={keywords.join(',')} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#316C5F" />
      <link rel="canonical" href={seoUrl} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
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
