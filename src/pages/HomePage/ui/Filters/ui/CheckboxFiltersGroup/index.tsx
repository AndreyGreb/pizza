'use client'

import { Input } from '@/src/shared/ui'
import { CheckboxFiltersGroupProps } from './types'
import { FilterCheckbox } from '../FilterCheckbox'
import { ChangeEvent, useMemo, useState } from 'react'

export const CheckboxFiltersGroup = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = "Поиск...",
    className,
    onChange,
    defaultValue
}:CheckboxFiltersGroupProps) => {

    const [showAll, setShowAll] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const renderList = useMemo(() => {
        if(showAll) {
            return items.filter(item => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
        }

        return defaultItems.slice(0, limit)
    },[defaultItems, items, limit, searchValue, showAll])

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

  return (
    <div>
        <p className='font-bold mb-3'>{title}</p>

        {showAll && 
            <div className='mb-5'>
                <Input
                    onChange={onChangeSearchInput} 
                    placeholder={searchInputPlaceholder} 
                    className='bg-gray-50 border-none' 
                />
            </div>
        }

        <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
            {renderList.map((item) => (
                <FilterCheckbox
                    text={item.text}
                    value={item.value}
                    endAdornment={item.endAdornment}   
                    checked={false}
                    // onCheckedChange={}
                    key={item.value}  
                />
            ))}
        </div>

        {items.length > limit && (
            <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                <button onClick={() => setShowAll(prev => !prev)} className="text-primary mt-3">
                    {showAll ? 'Скрыть' : '+ Показать все'}
                </button>
            </div>
        )}
    </div>
  )
}