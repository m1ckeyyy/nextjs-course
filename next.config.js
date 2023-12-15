/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// domains: ["images.unsplash.com", "plus.unsplash.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "plus.unsplash.com",
				pathname: "**",
			},
		],
	},
};

module.exports = nextConfig;
