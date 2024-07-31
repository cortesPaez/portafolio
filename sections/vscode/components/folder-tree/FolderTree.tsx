import { NodeData } from 'react-folder-tree';
import 'react-folder-tree/dist/style.css';
import { FolderTreeContainer } from './styles';
import dynamic from 'next/dynamic';

export const Folders = ({ treeState }: any) => {
	const onTreeStateChange = (state: any, event: any) => console.log(state, event);
	const FolderTree = dynamic(() => import('react-folder-tree'), {
		ssr: false,
	});

	return (
		<FolderTreeContainer>
			<FolderTree
				showCheckbox={false}
				data={treeState}
				onChange={onTreeStateChange}
				onNameClick={({ nodeData }) => {
					console.log(nodeData.name);
				}}
			></FolderTree>
		</FolderTreeContainer>
	);
};
