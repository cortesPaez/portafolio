import { create } from 'zustand';
import { NodeData } from 'react-folder-tree';

interface IVisualStudioCode {
	treeState: NodeData;
	fileSelected: string;
	setFileSelected: (fileSelected: string) => void;
	tabSelected: number | undefined;
	setTabSelected: (tabSelected: number) => void;
}

const useVisualStudioCode = create<IVisualStudioCode>((set: any) => ({
	treeState: {
		name: 'src',
		checked: 0.5, // half check: some children are checked
		isOpen: true, // this folder is opened, we can see it's children
		children: [{ name: 'experience.tsx' }, { name: 'project.tsx' }],
	},
	fileSelected: '',
	setFileSelected: (fileSelected: string) => set({ fileSelected: fileSelected }),
	tabSelected: undefined,
	setTabSelected: (tabSelected: number) => set({ tabSelected: tabSelected }),
}));

export default useVisualStudioCode;
