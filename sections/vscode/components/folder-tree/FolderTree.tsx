import { NodeData } from 'react-folder-tree';
import 'react-folder-tree/dist/style.css';
import { FolderTreeContainer } from './styles';
import dynamic from 'next/dynamic';

export const Folders = () => {
	// Estructura de datos ajustada para cumplir con NodeData
	const treeState: NodeData = {
		name: 'src',
		checked: 0.5, // half check: some children are checked
		isOpen: true, // this folder is opened, we can see it's children
		children: [{ name: 'experience.tsx' }, { name: 'project.tsx' }],
	};
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
