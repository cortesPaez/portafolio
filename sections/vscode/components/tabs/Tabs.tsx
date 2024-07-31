import { Tab, TabContainer, TabFlex } from './styles';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from 'react';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

const Tabs = () => {
	const [value, setValue] = useState("console.log('hello world!');\nconst a = 'aaa'");
	const [tabSelected, setTabSelected] = useState(0);

	const onChange = useCallback((val: any, viewUpdate: any) => {
		console.log('val:', val);
		setValue(val);
	}, []);

	const tab = [
		{
			title: 'Untitled-1',
			active: false,
			panel: (
				<CodeMirror
					value={value}
					height="450px"
					extensions={[javascript({ jsx: true })]}
					onChange={onChange}
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
					onChange={onChange}
					theme={vscodeDark}
				/>
			),
		},
	];

	return (
		<TabContainer>
			<TabFlex>
				{tab.map((item, i) => (
					<Tab onClick={() => setTabSelected(i)} $active={i === tabSelected}>
						{item.title}
					</Tab>
				))}
			</TabFlex>
			{tab[tabSelected].panel}
		</TabContainer>
	);
};

export default Tabs;
