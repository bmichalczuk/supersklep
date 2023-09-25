/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
				port: "",
				pathname: "/**/*",
			},
		],
	},
	experimental: {
		typedRoutes: false,

		mdxRs: true,
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
