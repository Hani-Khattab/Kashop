// useCartUIStore.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  openCart: false,
  openCartDrawer: () => set({ openCart: true }),
  closeCartDrawer: () => set({ openCart: false }),
}));

export default useCartStore;