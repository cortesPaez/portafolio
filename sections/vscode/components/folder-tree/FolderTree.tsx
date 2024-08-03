import { NodeData } from 'react-folder-tree';
import 'react-folder-tree/dist/style.css';
import { FolderTreeContainer } from './styles';
import dynamic from 'next/dynamic';
import useVisualStudioCode from '@/store/vscode';

const FolderTree = dynamic(() => import('react-folder-tree'), {
	ssr: false,
});

export const Folders = ({ treeState }: any) => {
	const { fileSelected, setFileSelected } = useVisualStudioCode();
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
				}}
			></FolderTree>
		</FolderTreeContainer>
	);
};
