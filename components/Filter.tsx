'use client';
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { filterData } from '@/sanity/help';

const links = ['All', 'Man', 'Women', 'Shoe'];

const Filter = () => {
    const [active, setActive] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleFilter = (link: string) => {
        let newUrl = '';

        if (active === link) {

            setActive('');

            newUrl = filterData({
                params: searchParams.toString(),
                keysToRemove: ['category'],
                value: null,
            });

        } else {
            setActive(link);

            newUrl = filterData({
                params: searchParams.toString(),
                key: 'category',
                value: link.toLowerCase(),
            });
        }
        console.log(newUrl)
        router.push(newUrl, { scroll: false })
    }
    return (

        <ul className='text-white-800
        flex  w-full  justify-evenly
        overflow-auto py-2
        '>
            {/* sm:max-w-2xl  */}
            {links.map((link) => (
                <button key={link}
                    className={`${active === link ? "border-b-4 border-black" : ""}text-white
                      p-2 m-3 rounded`}
                    onClick={() => handleFilter(link)}
                >
                    {link}
                </button>
            ))}
        </ul>


    )
}

export default Filter
