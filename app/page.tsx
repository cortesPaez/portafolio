'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push('/windows');
	}, []);

	return (
		<>
			<main>
				<Link href="/windows">Windows</Link>
			</main>
		</>
	);
}
