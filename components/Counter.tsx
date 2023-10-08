'use client'

import React, { createContext } from 'react'
import { useState } from 'react';
import Sample from './Sample';
import Link from 'next/link';
import Bracket from './Bracket';


export const MyContext = createContext({
    update: 0,
    setUpdate: () => { },

});

interface Props {
    title: string,
    image: string,
    price: number
}

const Counter = ({ title, image, price }: Props) => {
    const [count, setCount] = useState(0);
    let [update, setUpdate] = useState(0);
    const handleCounter = (a: string) => {
        if (count !== 0 && a == 'de') {
            setCount(count - 1)
            setUpdate(count - 1);

        } else if (a == 'in') {
            setCount(count + 1)
            setUpdate(count);
        }
    };
    console.log(update);

    return (
        <>
            <div className='flex justify-start w-full text-center  bg-black'>
                <button className=' bg-blue-950 text-white p-1 rounded' onClick={() => handleCounter('in')} >+1</button>
                <button className='bg-black text-white p-1.5 rounded' onClick={() => handleCounter('de')} >-1</button>
                <span className=''>
                    <Sample update={update} />
                </span>
                <Link href='/shop/order' className='bg-transparent'>
                    <button className=' text-center p-2
                 text-white'>Clik to order</button></Link>
            </div>
            <div>
                <Bracket title={title} image={image} price={price} count={update} />
            </div>
        </>


    )
}

export default Counter
