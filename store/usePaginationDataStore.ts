import { create } from "zustand";

interface PaginationDataStore {
  paginationData: string[];
  setPaginationData: (data: string[]) => void;
}

const usePaginationDataStore = create<PaginationDataStore>((set) => ({
  paginationData: [],
  setPaginationData: (data) => set({ paginationData: data }),
}));

export default usePaginationDataStore;
