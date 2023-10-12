'use client'
import React from 'react'
// import {
//     HoverCard,
//     HoverCardContent,
//     HoverCardTrigger,
// } from "@/components/ui/hover-card"

import { motion } from "framer-motion"
import Image from 'next/image'

const Slide = () => {
    return (
        <div className='m-0 bg-white md:bg-transparent md:mt-0 lg:-mt-10'>
            <div className=''>
                <div className=''>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatDelay: 1
                        }}

                    >
                        <svg viewBox="0 0 180 30" >
                            <text x="0" y="20" fill='blue' className=''>ENJOY SHOPPING</text>
                        </svg>
                    </motion.div>
                </div>

                {/* <div>
                    <motion.div
                        // initial={{ x: -900, y: 0 }}
                        // animate={{ x: -160, y: 60 }}
                        // transition={{
                        //     duration: 0.1
                        // }}

                        // whileHover={{ scale: 1.7, rotate: 20 }}
                        // whileTap={{
                        //     scale: 0.8,
                        //     rotate: -90,
                        //     borderRadius: "100%"
                        // }} 
                        className=' '
                    >
                        <Image src={'/shoe1.png'} width={250} height={300} alt='image'
                            className='
'
                        />
                    </motion.div>
                </div> */}
            </div>
            {/* <HoverCardContent className=''>
                    @ fast order and all item are have| မြန်ဆန်ပြီး ပစ္စည်းအားလုံး ပါရှိပါသည်။
                </HoverCardContent> */}
        </div>
    )
}

export default Slide
