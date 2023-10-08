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
        <div className='relative -mt-14'>
          <Slide />
          <hr />
          <Button asChild className='text-center w-full relative -top-3
            text-blue-600 bg-white '>
            <Link href="/shop" >Click To More Shop</Link>
          </Button>
        </div>
      </main>
    </>
  )
}
