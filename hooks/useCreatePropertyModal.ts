import { create } from "zustand";

interface CreatePropertyModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCreatePropertyModal = create<CreatePropertyModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreatePropertyModal;
