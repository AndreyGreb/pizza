import { Container, Title } from '@/src/shared/ui'
import TopBar from '@/src/pages/HomePage/ui/TopBar'
import { Filters } from './ui/Filters'
import { ProductsGroupList } from './ui/ProductsGroupList'

export const HomePage = () => {
  return (
    <>
    <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
    </Container>

    <TopBar />

    <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
            <div className='w-[250px]'>
                <Filters />
            </div>

            <div className='flex-1'>
                <div className='flex flex-col gap-16'>
                    <ProductsGroupList
                        title='Пиццы'
                        items={[
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                        ]} 
                        categoryId={1}
                    />

                    <ProductsGroupList
                        title='Комбо'
                        items={[
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                            {
                                id: 1,
                                name: 'Чизбургер пицца', 
                                items: [{price: 550}],
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif' 
                            },
                        ]} 
                        categoryId={2}
                    />
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}