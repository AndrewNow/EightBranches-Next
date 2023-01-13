/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  // presets: ["next/babel"],
  plugins: [
    // [
    //   "babel-plugin-styled-components",
    //   {
    //     ssr: true,
    //   },
    // ],
  ],
  images: {
    domains: ["cdn.sanity.io"],
    // loader: 'custom'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = nextConfig;
