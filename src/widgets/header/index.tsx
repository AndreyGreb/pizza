import Image from 'next/image'
import Link from 'next/link'

import { Button, Container, SearchInput } from '@/src/shared/ui'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'

export const Header = () => {
  return (
    <header className='border border-b'>
        <Container className='flex items-center justify-between py-8'>
            <Link href='/'>
                <div className='flex items-center gap-4'>
                    <Image src="/logo.png" alt="Logo" width={35} height={35} />
                    <div>
                        <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
                        <p className='text-sm text-gray-400 leading-3'>вкусней уже некуда</p>
                    </div>
                </div>
            </Link>

            <div className='mx-10 flex-1'>
                <SearchInput />
            </div>

            <div className='flex items-center gap-3'>
                <Button variant='outline' className='flex items-center gap-1'>
                    <User size={16} />
                    Войти
                </Button>

                <div>
                    <Button className='group relative'>
                        <b>520 ₽</b>
                        <span className='h-full w-[1px] bg-white/30 mx-3' />
                        <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                            <ShoppingCart className='relative' size={16} strokeWidth={2} />
                            <b>3</b>
                        </div>
                        <ArrowRight
                            className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                            size={20}    
                        />
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  )
}