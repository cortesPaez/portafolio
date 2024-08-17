import useVisualStudioCode from '@/store/vscode';
import { EditorContainer, Tab, TabContainer, TabFlex } from './styles';
import { Experience } from '../experience/Experience';
import { Editor } from '@monaco-editor/react';

const Tabs = () => {
	const { tabSelected, setTabSelected } = useVisualStudioCode();

	const PRESENTATION = `interface IDev {
	name: string;
	career: string;
	email: string;
	phone: number;
	specialization: string;
	skills: string[]
	location: string;
}

export const Presentation: Function = (dev: IDev): IDev => {
	if (!dev)
		return ({
			name: 'Cristóbal Cortés Páez',
			career: 'Analista Programador',
			email: 'cristobal.cortespaez@gmail.com',
			phone: 936870299,
			specialization: 'Front End',
			location: 'Santiago, Chile',
			skills: ['ReactJS', 'Typescript',
							 'NodeJS', 'UI', 'Agile Scrum Methodology'],
		})
		return dev
	}
`;

	const tab = [
		{
			title: 'Presentation.tsx',
			active: false,
			panel: (
				<EditorContainer>
					<Editor
						value={PRESENTATION}
						language="typescript"
						theme="vs-dark"
						options={{ tabSize: 2 }}
					/>
				</EditorContainer>
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
