import { create } from 'zustand';

interface IVisualStudioCode {
	fileSelected: string;
	setFileSelected: (fileSelected: string) => void;
	tabSelected: number | undefined;
	setTabSelected: (tabSelected: number) => void;
	show: boolean;
	setShow: (show: boolean) => void;
	showPdf: boolean;
	setShowPdf: (showPdf: boolean) => void;
}

const useVisualStudioCode = create<IVisualStudioCode>((set: any) => ({
	treeState: {
		name: 'src',
		checked: 0.5,
		isOpen: true,
		children: [{ name: 'presentation.tsx' }, { name: 'work-experience.ts' }],
	},
	fileSelected: '',
	setFileSelected: (fileSelected: string) => set({ fileSelected: fileSelected }),
	tabSelected: 0,
	setTabSelected: (tabSelected: number) => set({ tabSelected: tabSelected }),
	show: false,
	setShow: (show: boolean) => set({ show: show }),
	showPdf: false,
	setShowPdf: (showPdf: boolean) => set({ showPdf }),
}));

export default useVisualStudioCode;
