/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/windows', // Cambia '/nueva-ruta' por la ruta a la que quieres redirigir
				permanent: true, // Usa 'true' para un redirect permanente (308) o 'false' para uno temporal (307)
			},
		];
	},
};

export default nextConfig;
