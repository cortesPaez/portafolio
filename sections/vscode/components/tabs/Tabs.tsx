import useVisualStudioCode from '@/store/vscode';
import { Tab, TabContainer, TabFlex } from './styles';
import { Experience } from '../experience/Experience';
import { Editor } from '@monaco-editor/react';
const Tabs = () => {
	const { tabSelected, setTabSelected } = useVisualStudioCode();

	const PRESENTATION = `import { useState } from 'react';

export const Presentation = () => {
	const [presentation, setPresentation] = useState<IPresentationData>(defaultState);
	setPresentation({
		name: 'Cristóbal Cortés Páez',
		location: 'Santiago, Chile',
		career: 'Analista Programador',
		specialization: 'Front End',
	});
};
`;

	const tab = [
		{
			title: 'Presentation.tsx',
			active: false,
			panel: (
				<Editor
					value={PRESENTATION}
					height="645px"
					defaultLanguage="javascript"
					defaultValue="// some comment"
					theme="vs-dark"
				/>
			),
		},
		{
			title: 'workExperience.ts',
			active: false,
			panel: <Experience />,
		},
	];

	return (
		<TabContainer>
			<TabFlex>
				{typeof tabSelected === 'number' &&
					tab.map((item, i) => (
						<Tab key={i} onClick={() => setTabSelected(i)} $active={i === tabSelected}>
							{item.title}
						</Tab>
					))}
			</TabFlex>
			<div style={{ height: '100%' }}>
				{typeof tabSelected === 'number' && tab[tabSelected].panel}
			</div>
		</TabContainer>
	);
};

export default Tabs;
