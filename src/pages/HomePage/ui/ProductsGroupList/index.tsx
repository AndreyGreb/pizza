'use client'

import { useIntersection } from 'react-use'
import { useEffect, useRef } from 'react'

import { Title } from '@/src/shared/ui'
import { ProductCard } from './ui/ProductCard'

import { ProductsGroupListProps } from './types'
import { useCategoryStore } from '@/src/app/store/category'

export const ProductsGroupList = ({title, items, categoryId}:ProductsGroupListProps) => {

    const setActiveCategoryId = useCategoryStore(state => state.setActiveId)

  const intersectionRef = useRef(null)

  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4
  })    

  useEffect(() => {
    if(intersection?.isIntersecting) {
        setActiveCategoryId(categoryId)
    }
  },[categoryId, intersection?.isIntersecting, setActiveCategoryId])

  return (
    <div id={title} ref={intersectionRef}>
        <Title text={title} size='lg' className='font-extrabold mb-5' />

        <div className='grid grid-cols-3 gap-[50px]'>
            {
                items.map(product => (
                    <ProductCard
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                        key={product.id}
                    />
                ))
            }
        </div>
    </div>
  )
}