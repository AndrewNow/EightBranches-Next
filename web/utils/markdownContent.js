import React from "react";
// import BlockContent from "@sanity/block-content-to-react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import { PortableText } from "@portabletext/react";
// import SanityImageComponent from "./sanityImageComponent";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";

const ImageComponent = ({ value, isInline }) => {
  // const { width, height } = getImageDimensions(value);
  const sanityConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_ID,
    dataset: "production",
  };
  return (
    <Image
      src={urlBuilder(sanityConfig)
        .image(value)
        .width(isInline ? 100 : 900)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      // loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",
        // Avoid jumping around with aspect-ratio CSS property
        margin: "0 auto",
        width: "90%",
      }}
      width={900}
      height={900}
      className="markdown-image"
    />
  );
};

const MarkdownContent = ({ blocks }) => {
  const components = {
    types: {
      image: ImageComponent,
      youtube: ({ value }) => {
        const { url } = value;
        const id = getYouTubeId(url);
        return <YouTube videoId={id} />;
      },
    },
  };

  return <PortableText value={blocks} components={components} />;
};

export default MarkdownContent;