import { create } from 'zustand';
import { NodeData } from 'react-folder-tree';

interface IVisualStudioCode {
	treeState: NodeData;
	fileSelected: string;
	setFileSelected: (value: string) => void;
}

const useVisualStudioCode = create<IVisualStudioCode>((set: any) => ({
	treeState: {
		name: 'src',
		checked: 0.5, // half check: some children are checked
		isOpen: true, // this folder is opened, we can see it's children
		children: [{ name: 'experience.tsx' }, { name: 'project.tsx' }],
	},
	fileSelected: '',
	setFileSelected: (newValue: string) => set({ fileSelected: newValue }),
}));

export default useVisualStudioCode;
