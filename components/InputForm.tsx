'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { filterData } from '@/sanity/help'

const InputForm = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [search, setSearch] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            let newUrl = '';
            if (search) {
                newUrl = filterData({
                    params: searchParams.toString(),
                    key: 'query',
                    value: search,
                })
            } else {
                newUrl = filterData({
                    params: searchParams.toString(),
                    key: 'query',
                    keysToRemove: ['query'],
                })
            }
            router.push(newUrl, { scroll: false })
        }, 300)
        return () => clearTimeout(delayDebounceFn)
    }, [search])


    return (
        <div>
            <input className="bg-transparent
             w-full
             text-center border
           border-x-gray-950
            focus:ring  
            focus:border-black
           rounded-lg p-2 placeholder:text-black"
                placeholder="Enter to search"
                defaultValue={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default InputForm
