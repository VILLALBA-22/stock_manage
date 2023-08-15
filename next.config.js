/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ['images.unsplash.com'],
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/login',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
