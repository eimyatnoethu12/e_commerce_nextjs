'use client';
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { filterData } from '@/sanity/help';

const links = ['All', 'Man', 'Women', 'Shoe'];
const Filter = () => {
    const [active, setActive] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    // console.log("searchParams-" + searchParams)
    const handleFilter = (link: string) => {
        let newUrl = '';
        if (active !== link) {
            if (searchParams) {
                setActive(link);
                console.log("searchParams set acive-" + searchParams)

                newUrl = filterData({
                    params: searchParams.toString(),
                    key: 'category',
                    value: link.toLowerCase(),
                });
            }
        }
        else if (active === link) {
            if (searchParams !== null) {
                setActive('');
                console.log("searchParams no acive-" + searchParams)
                newUrl = filterData({
                    params: searchParams.toString(),
                    keysToRemove: ['category'],
                    value: null,
                });
            }
        }

        // console.log(newUrl)
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
