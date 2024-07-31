import { Tab, TabContainer, TabFlex } from './styles';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from 'react';
import createTheme from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

const Tabs = () => {
	const [value, setValue] = useState("console.log('hello world!');\nconst a = 'aaa'");
	const [tabSelected, setTabSelected] = useState(0);

	const onChange = useCallback((val: any, viewUpdate: any) => {
		console.log('val:', val);
		setValue(val);
	}, []);

	const myTheme = createTheme({
		theme: 'dark',
		settings: {
			background: '#1E1E1E',
			foreground: '#ff0000',
			caret: '#5d00ff',
			selection: '#036dd626',
			selectionMatch: '#003b7625',
			lineHighlight: '#8a91991a',
			gutterBackground: '#1E1E1E',
			gutterForeground: '#8a919966',
		},
		styles: [
			{ tag: t.comment, color: '#004dc899' },
			{ tag: t.variableName, color: '#8a8a8a' },
			{ tag: [t.string, t.special(t.brace)], color: '#ffffff' },
			{ tag: t.number, color: '#ffffff' },
			{ tag: t.bool, color: '#5c6166' },
			{ tag: t.null, color: '#5c6166' },
			{ tag: t.keyword, color: '#f3f3f3' }, //const
			{ tag: t.operator, color: '#5c6166' },
			{ tag: t.className, color: '#5c6166' },
			{ tag: t.definition(t.typeName), color: '#615c66' },
			{ tag: t.typeName, color: '#5c6166' },
			{ tag: t.angleBracket, color: '#5c6166' },
			{ tag: t.tagName, color: '#5c6166' },
			{ tag: t.attributeName, color: '#5c6166' },
		],
	});

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
					theme={myTheme}
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
					theme={myTheme}
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
