/** @type {import('next').NextConfig} */
const nextConfig = {
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
	},
};

module.exports = nextConfig;
