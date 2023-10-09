
import React from 'react'
import { getResources } from '@/sanity/getdata'
import InputForm from '@/components/InputForm'
import CardPhoto from '@/components/CardPhoto'
import Filter from '@/components/Filter'


// export const revalidate = 900;
interface Props {
    searchParams: {
        [key: string]: string | undefined
    }
}
const Shop = async ({ searchParams }: Props) => {

    const resources = await getResources({
        query: searchParams?.query || '',
        category: searchParams?.category || '',
        page: '1',
    })
    // let a = ;
    console.log(resources);

    return (
        <>
            <div className='flex justify-center
         mt-6'>
                <InputForm />
            </div>

            <Filter />
            <div className='flex flex-col'>
                {/* {(searchParams?.query || searchParams?.category) && (
                    <section className="flex-center w-full flex-col
                ">
                        <div className='flex text-center font-bold
                        text-xl text-white ml-3 justify-center
                      '>
                            {(searchParams?.query) ?
                                <>
                                    <small>Search for "{searchParams?.query}"</small>

                                </> : ""}
                        </div>
                        <div className='flex justify-center p-2 text-center font-bold
                        text-2xl text-black
                       underline decoration-white'>
                            {(searchParams?.category == 'all') ? "All items" : <small>{searchParams?.category}</small>}
                        </div>

                        <div className="flex w-full flex-wrap 
        justify-center gap-3 sm:justify-center">
                            {resources?.length > 0 ? (
                                resources.map((resource: any) => (
                                    <div>
                                        <CardPhoto key={resource._id}
                                            title={resource.title}
                                            id={resource._id}
                                            image={resource.image}
                                            price={resource.price}
                                            slug={resource._id}
                                            category={resource.category}
                                        />
                                    </div>

                                ))) :
                                <p className="body-regular mt-20 font-bold text-2xl mb-10 
                                text-red-400 p-7
                                font-mono">
                                    No Resource found, Sorry this item currenly does not have!!
                                </p>
                            }

                        </div>
                    </section>
                )} */}

                {(searchParams?.query == undefined && searchParams?.category == undefined)
                    && (<section className="flex-center w-full flex-col
                ">
                        <div className='flex text-center font-bold
                        text-xl text-white ml-3 justify-center
                      '>
                            {(searchParams?.query) ?
                                <>
                                    <small>Search for "{searchParams?.query}"</small>

                                </> : ""}
                        </div>
                        <div className='flex justify-center p-2 text-center font-bold
                        text-2xl text-black
                       underline decoration-white'>
                            Trending
                        </div>
                        <div className='flex justify-center p-2 text-center font-bold
                        text-2xl text-black
                       underline decoration-white'>
                            {(searchParams?.category == 'all') ? "Trending" : searchParams?.category}
                        </div>
                        <div className="flex w-full flex-wrap 
        justify-center gap-3 sm:justify-center">
                            {resources?.length > 0 ? (
                                resources.map((resource: any) => (
                                    <div>
                                        <CardPhoto key={resource._id}
                                            title={resource.title}
                                            id={resource._id}
                                            image={resource.image}
                                            price={resource.price}
                                            slug={resource._id}
                                            category={resource.category}
                                        />
                                    </div>

                                ))) :
                                <p className="body-regular mt-20 font-bold text-2xl mb-10 
                                text-red-400 p-7
                                font-mono">
                                    No Resource found, Sorry this item currenly does not have!!
                                </p>
                            }

                        </div>
                    </section>)}
            </div>
        </>

    )
}

export default Shop



{/* {(searchParams?.query || searchParams?.category) ?
                    (
                        resources.map((resource: any) =>

                        (
                            <>
                                <Header query={searchParams?.query || ''}
                                    category={resource.category || ''}
                                />
                                <section className="flex-cenrer mt-6 w-full flex-col">
                                    <div className="mt-9 flex w-full flex-wrap
        justify-center gap-10 sm:justify-start">
                                        <CardPhoto key={resource._id}
                                            title={resource.title}
                                            id={resource._id}
                                            image={resource.image}
                                            price={resource.price}
                                            slug={resource._id}
                                            category={resource.category}

                                        /></div></section>
                            </>


                        )
                        )) : (
                        <p className="body-regular text-white-400">
                            No Resource found
                            {searchParams?.query}
                        </p>
                    )

                } */}
