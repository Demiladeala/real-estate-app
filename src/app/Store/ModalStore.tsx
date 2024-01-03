import { create } from 'zustand'

interface ModalState {
    currentModal: number | null;
    numberOfModals: number;
    openModal: (ModalNumber:number) => void;
    closeModal: () => void;
    incrementModal: () => void;
    decrementModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
    currentModal: null,
    numberOfModals: 5,
    openModal: (number) => set({ currentModal:number}),
    closeModal: () => set({ currentModal: null}),
    incrementModal: () =>
    set((state) => ({ currentModal: (state.currentModal || 0) + 1 })),
  decrementModal: () =>
    set((state) => ({ currentModal: (state.currentModal || 0) - 1 })),
}));

