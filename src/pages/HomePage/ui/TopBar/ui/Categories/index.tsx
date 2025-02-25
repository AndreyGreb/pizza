'use client'

import { useCategoryStore } from '@/src/app/store/category'
import { cn } from '@/src/shared/lib/utils'

const categories = [
    {
        id: 1,
        name: 'Пиццы'
    },
    {
        id: 2,
        name: 'Комбо'
    },
    {
        id: 3,
        name: 'Закуски'
    },
    {
        id: 4,
        name: 'Коктейли'
    },
    {
        id: 5,
        name: 'Кофе'
    },
    {
        id: 6,
        name: 'Напитки'
    },
    {
        id: 7,
        name: 'Десерты'
    },
]

export const Categories = () => {

    const categoryActiveId = useCategoryStore(state => state.activeId)

  return (
    <div className={'inline-flex gap-1 bg-gray-50 p-1 rounded-2xl'}>
        {
            categories.map(({name, id}) => (
                <a 
                    className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )}
                    href={`/#${name}`}
                    key={id}
                >
                    <button>{name}</button>
                </a>
            ))
        }
    </div>
  )
}