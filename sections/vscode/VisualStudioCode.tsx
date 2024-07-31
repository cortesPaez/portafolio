'use client';
import { NodeData } from 'react-folder-tree';
import { FileList, Sidebar } from './components';
import Tabs from './components/tabs/Tabs';
import { Screen } from './styles';
import { useState } from 'react';

const VisualStudioCode = () => {
	const [treeState, setTreeState] = useState<NodeData>({
		name: 'src',
		checked: 0.5, // half check: some children are checked
		isOpen: true, // this folder is opened, we can see it's children
		children: [{ name: 'experience.tsx' }, { name: 'project.tsx' }],
	});

	return (
		<Screen>
			<Sidebar />
			<FileList treeState={treeState} />
			<Tabs />
		</Screen>
	);
};

export default VisualStudioCode;
