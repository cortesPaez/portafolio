import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Portafolio | Cristobal Cortés',
	description: 'Desarrollador Front End con 3 años de experiencia en el ecosistema de ReactJS.',
	authors: { name: 'Cristóbal Cortés', url: 'https://www.linkedin.com/in/ccortespaez/' },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
