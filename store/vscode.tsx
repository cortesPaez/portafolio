import { create } from 'zustand';
import { NodeData } from 'react-folder-tree';

interface IVisualStudioCode {
	treeState: NodeData;
	fileSelected: string;
	setFileSelected: (fileSelected: string) => void;
	tabSelected: number | undefined;
	setTabSelected: (tabSelected: number) => void;
	show: boolean;
	setShow: (show: boolean) => void;
}

const useVisualStudioCode = create<IVisualStudioCode>((set: any) => ({
	treeState: {
		name: 'src',
		checked: 0.5,
		isOpen: true,
		children: [{ name: 'Presentation.tsx' }, { name: 'workExperience.ts' }],
	},
	fileSelected: '',
	setFileSelected: (fileSelected: string) => set({ fileSelected: fileSelected }),
	tabSelected: 0,
	setTabSelected: (tabSelected: number) => set({ tabSelected: tabSelected }),
	show: false,
	setShow: (show: boolean) => set({ show: show }),
}));

export default useVisualStudioCode;
