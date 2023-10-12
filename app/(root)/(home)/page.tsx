import Slide from '@/components/Slide'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import AnimationDashboard from '@/components/AnimationDashboard'

export default function Home() {
  return (
    <>
      <main className='top-0 h-full bg-black'>
        <AnimationDashboard />
        <div className='
        relative 
        
        md:mt-10
        lg:-mt-24 mt-10
        sm:-mt-14
        '>

          <div className='flex lg:mt-14
          justify-center'>
            <Link href="/shop"
              className='
          text-center flex justify-center
          w-3/6 p-3 md:w-2/6 md:p-4
         md:text-lg lg:w-1/6
          lg:text-lg text-xl
          rounded-full
          lg:mt-10 font-serif
          
            text-blue-600
             outline outline-blue-900
              hover:bg-blue-600 shad
             hover:text-black
             ' >Get Started</Link>

          </div>
          <br />
          <Slide />
        </div>
      </main>
    </>
  )
}
