'use client';

import { Screen } from '@/sections/screen/Screen';
import { TaskBar } from '@/sections/task-bar/TaskBar';

export default function Home() {
	return (
		<>
			<main style={{ width: '100vw', minHeight: '100svh', maxHeight: '100svh' }}>
				<Screen />
			</main>
			<TaskBar />
		</>
	);
}
