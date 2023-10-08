import React from 'react'

interface Props {
    title: string,
    image: string,
    price: number,
    count: number,
}
const Bracket = ({ title, image, price, count }: Props) => {
    return (
        <div className=''>
            <small>TotalPrice-</small>
            <small>${count * price}</small>
        </div>
    )
}

export default Bracket
