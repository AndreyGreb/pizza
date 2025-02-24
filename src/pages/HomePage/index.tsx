import { Container, Title } from '@/src/shared/ui'
import TopBar from '@/src/widgets/topBar'
import React from 'react'

export const HomePage = () => {
  return (
    <>
    <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
    </Container>

    <TopBar />
    </>
  )
}