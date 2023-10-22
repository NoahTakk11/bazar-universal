import { create } from "zustand";

interface State {
  category: string;
}

interface Actions {
  setCategory: (category: string) => void;
}

export const useItems = create<State & Actions>((set) => ({
  category: "smartphones",

  setCategory: (category: string) =>
    set(() => ({
      category: category,
    })),
}));
