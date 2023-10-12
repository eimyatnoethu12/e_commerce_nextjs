'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelopeOpenText, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook)
const Footer = () => {
    return (
        <div className='lg:mt-8 
         mt-12 md:mt-28'>

            <div className='mt-6
             pt-1 pb-2
        
          sm:mt-1 sm:p-2
          lg:mb-5 lg:p-0 lg:mt-2
        '>


                <small className='text-white
             lg:text-2xl font-thin -mt-12
             flex justify-center  text-center lg:-mt-14 md:text-2xl'>
                    Thanks For shopping with us @EiMyatNoeThu
                </small>
                <hr />

                <div className='flex justify-center  
                font-bold'>
                    <div className='flex justify-center flex-col m-4'>
                        <div className='lg:text-xl text-slate-400 
                         text-lg font-medium'>Terms & Privacy</div>
                        <span className='lg:text-xl  text-slate-500 font-light text-sm'>Lorem ipsum is okay</span>
                        <small className='lg:text-xl  text-slate-500 font-light text-sm'>Yes my web my rule</small>
                        <small className='lg:text-xl  text-slate-500 font-light text-sm'>Refund 50%</small>
                    </div >
                    <div className='border-slate-500 border-r'></div>
                    <div className='flex justify-center flex-col m-4'>
                        <div className='lg:text-xl text-slate-400  
                        text-lg font-medium'>Contact</div>

                        <span className='lg:text-xl  text-slate-500 font-light text-sm'>
                            <FontAwesomeIcon icon={faFacebook} className='w-4' /> &nbsp;
                            EiMyatNoeThu.dev</span>
                        <small className='lg:text-xl  text-slate-500 font-light text-sm'>
                            <FontAwesomeIcon icon={faEnvelopeOpenText} className='w-3' /> &nbsp;
                            emnt@gmai.com</small>

                        <small className='lg:text-xl  text-slate-500 font-light text-sm'>
                            <FontAwesomeIcon icon={faPhoneVolume} className='w-3' />&nbsp;
                            +9590000000</small>
                    </div >

                </div>

                <small className='text-whtie text-xl mx-2
                 flex justify-center font-blod text-slate-800'> <small className='mx-2
                 flex justify-center font-bold text-slate-800 '>
                        <FontAwesomeIcon icon={faLocationDot} className='w-2 text-sm' />
                        Location Myanmar | make with love</small></small>
            </div>

        </div>

    )
}

export default Footer
