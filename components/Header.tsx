import React from 'react'
interface Props {

    query: string;
    category: string;
}
const Header = ({ query, category }: Props) => {
    if (query && category) {
        return (
            <h1 className="flex justify-center text-2xl text-orange-300 mt-0 ">
                Search results for "{query}" in &#160;<span className="capitalize">{category}</span>
            </h1>
        )
    }

    if (query) {
        return (
            <h1 className="heading3 self-start text-white-800">
                Search results for "{query}"
            </h1>
        )
    }

    if (category) {
        return (
            <h1 className="text-white">
                All of items are
                <span className="capitalize">{category}</span>
            </h1>
        )
    }

    return (
        <h1 className="heading3 self-start text-white-800">No Results</h1>
    )
}

export default Header
