'use client';

import { Screen } from '@/sections/screen/Screen';
import { TaskBar } from '@/sections/task-bar/TaskBar';
import { Suspense } from 'react';

export default function Home() {
	return (
		<>
			<main style={{ width: '100vw', maxHeight: '100svh' }}>
				<Screen />
				<Suspense fallback={<h1>cargando</h1>}>
					<TaskBar />
				</Suspense>
			</main>
		</>
	);
}
