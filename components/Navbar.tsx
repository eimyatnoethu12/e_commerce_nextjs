'use client'
import Link from 'next/link'

import Image from 'next/image'



const Navbar = () => {


    return (
        <nav className='flex justify-center top-0 z-50 w-full text-white
        border-b-2 bg-black border-black-200 py-2
        '>

            <div className="flex justify-between
             mx-auto w-full max-w-screen-2xl
            px-6 xs:px-8 sm:px-16 
            ">
                <Link href={"/"} className='relative -top-0 m-0 flex'>
                    <small className='z-20 text-xl relative  
                    -left-5 font-semibold
                    p-2 -top-1'>
                        EMNT</small>
                    <Image src={"/favicon.ico"} width={50} height={30}
                        className='rounded-full w-2/6
                            absolute right-0 bottom-3 '
                        alt='icon' />
                </Link>
                <div className='flex flex-col relative m-0'>
                    <Image
                        src={'/shopping-cart_3144456.png'} alt='shopping icon'
                        className='cursor-not-allowed  p-1 rounded-full bg-white' width={35} height={35}
                    />
                </div>


            </div>
        </nav>
    )
}

export default Navbar
