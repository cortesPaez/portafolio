'use client';
import { FileList } from './components';
import Tabs from './components/tabs/Tabs';
import { Screen } from './styles';
import useVisualStudioCode from '@/store/vscode';

const VisualStudioCode = () => {
	const { treeState } = useVisualStudioCode();

	return (
		<Screen>
			<FileList treeState={treeState} />
			<Tabs />
		</Screen>
	);
};

export default VisualStudioCode;
