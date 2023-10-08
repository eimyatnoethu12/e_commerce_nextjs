import React from 'react'
import { getResources } from '@/sanity/getdata'
import Filter from './Filter'
import CardPhoto from './CardPhoto';

export const revalidate = 900;
interface Props {
    searchParams: {
        [key: string]: string | undefined
    }
}
async function Shop({ searchParams }: Props) {

    const resources = await getResources({
        query: searchParams?.query || '',
        category: searchParams?.category || '',
        page: '1',
    })

    console.log("resources" + searchParams?.category)
    return (
        <>
            <Filter />
            {searchParams?.category}
            <div className='mt-4 flex '>
                {(searchParams?.query || searchParams?.category) ?

                    (
                        resources.map((re: any) =>
                        (

                            <CardPhoto id={re.id}
                                title={re.title}
                                image={re.image}
                                price={re.price}
                                category={re.category}
                            />

                        )
                        )) : (
                        <p className="body-regular text-white-400">
                            No Resource found
                            {searchParams?.query}
                        </p>
                    )

                }

            </div>

            {/* )} */}

        </>

    )
}




export default Shop

