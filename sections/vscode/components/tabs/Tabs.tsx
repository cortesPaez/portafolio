import { Tab, TabContainer, TabFlex } from './styles';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from 'react';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

const Tabs = () => {
	const [value, setValue] = useState("console.log('work in progress!');");
	const [tabSelected, setTabSelected] = useState(0);

	const tab = [
		{
			title: 'Untitled-1',
			active: false,
			panel: (
				<CodeMirror
					value={value}
					height="450px"
					extensions={[javascript({ jsx: true })]}
					theme={vscodeDark}
				/>
			),
		},
		{
			title: 'Untitled-2',
			active: false,
			panel: (
				<CodeMirror
					value={''}
					height="450px"
					extensions={[javascript({ jsx: true })]}
					theme={vscodeDark}
				/>
			),
		},
	];

	return (
		<TabContainer>
			<TabFlex>
				{tab.map((item, i) => (
					<Tab key={i} onClick={() => setTabSelected(i)} $active={i === tabSelected}>
						{item.title}
					</Tab>
				))}
			</TabFlex>
			{tab[tabSelected].panel}
		</TabContainer>
	);
};

export default Tabs;
