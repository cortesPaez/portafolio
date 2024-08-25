'use client';

import Screen from './sections/screen/Screen';
import { TaskBar } from './sections/task-bar/TaskBar';
import { Suspense, useLayoutEffect, useState } from 'react';

export default function Page() {
	const [render, setRender] = useState(false);
	useLayoutEffect(() => {
		setRender(!render);
	}, []);

	return (
		<>
			{render && (
				<main style={{ width: '100vw', maxHeight: '100svh' }}>
					<Suspense fallback={<h1>cargando</h1>}>
						<Screen />
						<TaskBar />
					</Suspense>
				</main>
			)}
		</>
	);
}
