import { useState, useEffect } from 'react';

export const useScreenSize = () => {
	const [width, setWidth] = useState<number | undefined>(undefined);
	const [height, setHeight] = useState<number | undefined>(undefined);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				setWidth(window.innerWidth);
				setHeight(window.innerHeight);
			};

			handleResize();

			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	return { width, height };
};
