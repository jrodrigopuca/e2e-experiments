/** @type {import('next').NextConfig} */
const nextConfig = {
	//basePath: process.env.WEB_PATH,
	env: {
		WEB_PATH: process.env.WEB_PATH,
		RED_TITLE: process.env.RED_TITLE,
	},
};

export default nextConfig;
