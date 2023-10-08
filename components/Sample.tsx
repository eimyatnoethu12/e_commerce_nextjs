import React from 'react'
interface Props {
    update: number;
}
const Sample = ({ update }: Props) => {
    return (
        <>
            <div className='text-white bg-green-800 
            p-2 '>{update}</div>
        </>
    )
}

export default Sample
