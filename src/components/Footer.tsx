import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 bg-black text-white  gap-y-2 place-items-center pt-16 pb-16'>
         <div className='flex flex-col gap-y-2'>
            <Link href="">Contact us</Link>
            <Link href="">About us</Link>
            <Link href="">Contact us</Link>
         </div>
         <div className='flex flex-col gap-y-2'>
            <Link href="">Contact us</Link>
            <Link href="">About us</Link>
            <Link href="">Contact us</Link>
         </div>
         <div className='flex flex-col gap-y-2'>
            <Link href="">Contact us</Link>
            <Link href="">About us</Link>
            <Link href="">Contact us</Link>
         </div>
         <div className='flex flex-col gap-y-2 col-span-3  sm:col-span-1'>
            <Input placeholder='Email...' className='bg-white text-black ' />
            <Button variant={"destructive"} className='w-full '>Subscribe</Button>
         </div>
    </div>
  )
}

export default Footer
