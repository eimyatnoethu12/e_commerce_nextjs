'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader
} from "@/components/ui/card"
import Counter from './Counter';
interface Props {
    title: string,
    id: number,
    price: number;
    image: string;
    category: string;
    slug: string;
}
const CardPhoto = ({ title, id, image, price, category, slug }: Props) => {
    return (
        <motion.div initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <motion.div className='flex flex-col m-2 w-full'
                whileHover={{ scale: 1.3 }}
                key={id}>
                <Card className='w-full m-0 bg-white'>
                    <CardHeader>
                        <CardDescription className='-mb-8'>{title}</CardDescription>
                    </CardHeader>
                    <CardContent className=' -mb-5' >
                        Category-{category.toUpperCase()}</CardContent>
                    <CardContent >
                        <div className='flex justify-center'>
                            <Image
                                src={image}
                                alt='image' width={150} height={200} className='bg-black'
                            />
                        </div>
                        <p>Price - ${price}</p>
                        <small> Thanks For shopping with us</small>
                    </CardContent>
                    <CardFooter className='-mt-2'>
                        <Counter title={title} image={image} price={price} />
                    </CardFooter>
                </Card>
            </motion.div>

        </motion.div>
    )
}

export default CardPhoto
