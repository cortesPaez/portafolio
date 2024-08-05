import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import CodeMirror from '@uiw/react-codemirror';
import useVisualStudioCode from '@/store/vscode';
import { Tab, TabContainer, TabFlex } from './styles';
import { Experience } from '../experience/Experience';

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
				<CodeMirror
					value={PRESENTATION}
					height="608px"
					extensions={[javascript({ jsx: true })]}
					theme={vscodeDark}
					indentWithTab
					readOnly
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
			{typeof tabSelected === 'number' && tab[tabSelected].panel}
		</TabContainer>
	);
};

export default Tabs;
