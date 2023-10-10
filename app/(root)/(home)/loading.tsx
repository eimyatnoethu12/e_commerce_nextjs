'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const loading = () => {
    return (
        <AnimatePresence mode='wait'>
            {/* <div> */}
            <motion.div
                className='slide-in'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                    duration: 5,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
            </motion.div>
            <h1>Ei Myat Noe Thu | develop</h1>
            <motion.div
                className='slide-out'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
            </motion.div>
            {/* /div>  < */}
            Ei Myat Noe Thu
        </AnimatePresence>
    )
}

export default loading
