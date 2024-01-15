import { create } from 'zustand'

interface ModalState {
    currentModal: number | null;
    propertyName: string; 
    openModal: (ModalNumber:number) => void;
    closeModal: () => void;
    setPropertyName: (name: string) => void;
}

export const useModalStore = create<ModalState>()((set) => ({
    currentModal: null,
    propertyName: '', 
    openModal: (number) => set({ currentModal:number}),
    closeModal: () => set({ currentModal: null}),
    setPropertyName: (propertyName) => set({ propertyName }),
}));

