"use client"
import { create } from 'zustand'

interface ModalState {
    currentModal: number | null;
    openModal: (ModalNumber:number) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
    currentModal: null,
    openModal: (number) => set({ currentModal:number}),
    closeModal: () => set({ currentModal: null}),
}));