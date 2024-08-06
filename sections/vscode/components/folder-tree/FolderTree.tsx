// import 'react-folder-tree/dist/style.css';
import useVisualStudioCode from '@/store/vscode';
import { FolderTreeContainer } from './styles';
import { TreeFolder, type Tree } from 'react-tree-folder';

// import this in your global layout
// if you use this on multiple pages
import 'react-tree-folder/dist/style.css';
// const FolderTree = dynamic(() => import('react-folder-tree'), {
// 	ssr: false,
// });

export const Folders = () => {
	const tree: Tree = [
		{
			text: 'Some Folder',
			dir: true,
			folderIcon: {
				closed: '📁',
				open: '📂',
				// a react element will also work
			},

			// a directory may be open by default
			open: true,

			// a directory may contain
			// other directories or files
			branch: [
				{
					text: 'Sub Folder',
					dir: true,
					folderIcon: {
						closed: '📁',
						open: '📂',
						// a react element will also work
					},
				},
				{
					text: 'Sub File',
				},
			],
		},
		{
			text: 'Some File',
		},
	];

	return (
		<FolderTreeContainer>
			{/* <FolderTree
				showCheckbox={false}
				data={treeState}
				onChange={onTreeStateChange}
				onNameClick={({ nodeData }) => {
					setFileSelected(nodeData.name);
					setTabSelected(Number(nodeData.path));
				}}
				readOnly
			></FolderTree> */}
			<div style={{ height: '100vh' }}>
				<TreeFolder tree={tree} />
			</div>
		</FolderTreeContainer>
	);
};
