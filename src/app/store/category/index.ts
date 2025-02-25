import { create } from 'zustand'
import { CategoryState } from './types'

export const useCategoryStore = create<CategoryState>()((set) => ({
    activeId: 1,
    setActiveId: (activeId) => set({ activeId })
}))