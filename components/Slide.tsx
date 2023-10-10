'use client'
import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
// import Image from 'next/image'
import { motion } from "framer-motion"


const Slide = () => {
    return (
        <div className='m-0 bg-white'>
            <HoverCard>
                <motion.div
                    animate={{ rotateX: 360 }}
                    drag
                    dragTransition={{
                        min: 0,
                        max: 100,
                        bounceStiffness: 100
                    }}
                    transition={{
                        duration: 5,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}

                >
                    <HoverCardTrigger className=''>
                        <svg viewBox="0 0 180 30">
                            <text x="0" y="20">ENJOY SHOPPING</text>
                        </svg>
                    </HoverCardTrigger>
                </motion.div>

                <HoverCardContent className=''>
                    @ fast order and all item are have| မြန်ဆန်ပြီး ပစ္စည်းအားလုံး ပါရှိပါသည်။
                </HoverCardContent>
            </HoverCard>

        </div >
    )
}

export default Slide
