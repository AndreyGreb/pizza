import { Container, Title } from '@/src/shared/ui'
import TopBar from '@/src/pages/HomePage/ui/TopBar'
import { Filters } from './ui/Filters'

export const HomePage = () => {
  return (
    <>
    <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
    </Container>

    <TopBar />

    <Container className='mt-10 pb-14'>
        <div className='flex gap-[60px]'>
            <div className='w-[250px]'>
                <Filters />
            </div>

            <div className='flex-1'>
                <div className='flex flex-col gap-16'>
                    Product list
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}