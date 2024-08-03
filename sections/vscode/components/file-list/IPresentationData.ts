import { useState } from 'react';

interface IPresentationData {
	name: string;
	location: string;
	career: string;
	specialization: string;
}

const defaultState = {
	career: '',
	specialization: '',
};

export const Presentation = () => {
	const [presentation, setPresentation] = useState<IPresentationData>(defaultState);
	setPresentation({
		...presentation,
		name: 'Cristóbal Cortés Páez',
		location: 'Santiago, Chile',
		career: 'Analista Programador',
		specialization: 'Front End',
	});
};
