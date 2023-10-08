"use client"
import { SimpleRegistrationForm } from '@/components/FromOrder'
import React from 'react'
import { Carousel } from "@material-tailwind/react";



const order = () => {
    return (
        <div className='flex justify-center w-full'>
            <SimpleRegistrationForm />
        </div>

    )
}

export default order
export { Carousel }
