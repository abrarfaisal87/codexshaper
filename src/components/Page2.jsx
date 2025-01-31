import React from 'react'
import union from '../assets/Union.png'
import page2pic from '../assets/page2pic.png'
import btn from '../assets/btn.png'

const Page2 = () => {
  return (
    <>
    <section className='bg-[#19EC60] text-[#041C0C]'>
         <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-8 items-center pt-8 pl-14'>
            <p className='font-hagrid text-6xl md:text-[190px] font-extrabold'>LET'S</p>
            <img src={union} className='w-16  h-10 sm:w-52 sm:h-32' />
          </div> 

          <div className='flex lex-row gap-4 justify-end items-center sm:gap-8 pr-4 sm:pr-24'>
            <img src={page2pic} className='w-20 h-12 sm:w-60 sm:h-40'/>
            <p className='font-hagrid text-6xl sm:text-[200px] font-extrabold sm:pb-6'>WORK</p>
          </div>
         </div>

         <div className='pb-8 sm:relative '>
          <p className='font-hagrid pl-8 text-6xl sm:text-[195px] font-extrabold sm:relative'>TOGETHER</p>
          <img src={btn} className=' sm:block w-32 h-32 sm:w-48 sm:h-48 sm:absolute sm:left-[600px] sm:top-32' />
          <div className='flex flex-row justify-end sm:pt-6 sm:pb-28 '>
           
            <p className='text-2xl font-binger  sm:text-4xl pr-4 sm:pr-24'>info@workmail.com</p>
          </div>
         </div>

    </section>
    </>

    
  )
}

export default Page2