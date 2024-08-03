import { create } from 'zustand';

const useVisualStudioCode = create((set: any) => ({
	fileSelected: '',
	setFileSelected: (newValue: string) => set({ fileSelected: newValue }),
}));

export default useVisualStudioCode;
