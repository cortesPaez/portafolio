import { useState } from 'react';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import CodeMirror from '@uiw/react-codemirror';
import useVisualStudioCode from '@/store/vscode';
import { Tab, TabContainer, TabFlex } from './styles';

const Tabs = () => {
	const [value, setValue] = useState("console.log('work in progress!');");
	const { tabSelected, setTabSelected } = useVisualStudioCode();

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
