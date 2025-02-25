import { cn } from '@/src/shared/lib/utils'

const categories = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты']
const activeIndex = 0

export const Categories = () => {
  return (
    <div className={'inline-flex gap-1 bg-gray-50 p-1 rounded-2xl'}>
        {
            categories.map((category, index) => (
                <a className={cn(
                    'flex items-center font-bold h-11 rounded-2xl px-5',
                    activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
                )} key={index}>
                    <button>{category}</button>
                </a>
            ))
        }
    </div>
  )
}