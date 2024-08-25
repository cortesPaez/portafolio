import { create } from 'zustand';

interface Windows {
	showVscode: boolean;
	setShowVscode: (showVscode: boolean) => void;
	showPdf: boolean;
	setShowPdf: (showPdf: boolean) => void;
}

const useWindows = create<Windows>((set: any) => ({
	showVscode: true,
	setShowVscode: (showVscode: boolean) => set({ showVscode }),
	showPdf: false,
	setShowPdf: (showPdf: boolean) => set({ showPdf }),
}));

export default useWindows;
