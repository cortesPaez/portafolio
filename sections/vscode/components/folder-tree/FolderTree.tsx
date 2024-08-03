import 'react-folder-tree/dist/style.css';
import dynamic from 'next/dynamic';
import useVisualStudioCode from '@/store/vscode';
import { FolderTreeContainer } from './styles';

const FolderTree = dynamic(() => import('react-folder-tree'), {
	ssr: false,
});

export const Folders = ({ treeState }: any) => {
	const { fileSelected, setFileSelected, setTabSelected } = useVisualStudioCode();
	const onTreeStateChange = (state: any, event: any) => console.log(state, event);

	console.log(fileSelected);
	return (
		<FolderTreeContainer>
			<FolderTree
				showCheckbox={false}
				data={treeState}
				onChange={onTreeStateChange}
				onNameClick={({ nodeData }) => {
					setFileSelected(nodeData.name);
					setTabSelected(Number(nodeData.path));
				}}
			></FolderTree>
		</FolderTreeContainer>
	);
};
