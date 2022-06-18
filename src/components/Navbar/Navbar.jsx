import React from 'react'
import SearchItem from './SearchItem'

const Navbar = () => {
    return (
        <nav className="py-4 px-10 flex items-center justify-between border-b border-slate-600">
            <div>
                <h1 className="font-semibold text-lg">Notes</h1>
            </div>

            <SearchItem />
        </nav>
    )
}

export default Navbar