

import Footer from '@/components/Footer';
import SearchComponent from '@/components/SearchComponent';
import Image from 'next/image';
import React from 'react'

const Home = () => {
  return (
    <main className="sm:container lg:px-16">
        {/* search form  */}
        <SearchComponent />
        <p className='text-2xl lg:text-4xl tracking-wide pt-16 pb-16 text-slate-500 text-center font-bold uppercase'>There is always a spot available.</p>
        <section className='pt-16 pb-32 hidden lg:block'>
            <div className='grid grid-cols-3 place-items-center'>
                <div className='flex flex-col items-center gap-3'>
                    <div className='relative flex flex-col items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white'>
                            <p className='font-bold text-2xl after:absolute 
                            after:content-[""] after:-top-2 after:-left-2 after:rounded-full after:-z-10 after:bg-gray-100 after:ring-1 after:ring-gray-300 
                            after:h-16 after:w-16
                            '>1</p>
                    </div>
                    <p className='text-md text-muted-foreground tracking-wide'>Enter your destination.</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <div className='relative flex flex-col items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white'>
                            <p className='font-bold text-2xl after:absolute 
                            after:content-[""] after:-top-2 after:-left-2 after:rounded-full after:-z-10 after:bg-gray-100 after:ring-1 after:ring-gray-300 
                            after:h-16 after:w-16
                            '>2</p>
                    </div>
                    <p className='text-md text-muted-foreground tracking-wide'>Pick date and time.</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <div className='relative flex flex-col items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white'>
                            <p className='font-bold text-2xl after:absolute 
                            after:content-[""] after:-top-2 after:-left-2 after:rounded-full after:-z-10 after:bg-gray-100 after:ring-1 after:ring-gray-300 
                            after:h-16 after:w-16 before:content-[""] before:w-[1050px]  before:h-[2px] before:absolute before:-left-[1000px] before:-z-20 before:bg-blue-500 before:top-1/2
                            '>3</p>
                    </div>
                    <p className='text-md text-muted-foreground tracking-wide'>Pick a spot.</p>
                </div>
            </div>
        </section>
         
         <h3 className='text-3xl lg:text-5xl text-gray-300 text-center pb-32 font-bold'>No more looking around for a parking spot.</h3>

         <section>
            <div className='sm:bg-map bg-gray-600 w-full pt-16 bg-no-repeat bg-cover bg-center bg-opacity-25 bg-blend-overlay absolute left-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center container  pb-32 place-content-center'>
                        <div className='flex flex-col text-center items-center justify-center h-full sm:w-1/2 text-zinc-600'>
                            <p className='text-3xl lg:text-4xl font-semibold'>Fully responsibe</p>
                            <p className='pt-2 text-md sm:text-lg tracking-tighter'>It feels just like a mobile app.</p>
                        </div>

                        <div className='pt-4 sm:pt-0'>
                            <Image src='/gateless-parking-mobile.png' alt='' width={320} height={400} />
                        </div>
                </div>
                {/* footer  */}
                <Footer />      
            </div>
         </section>
    </main>
  )
}

export default Home;