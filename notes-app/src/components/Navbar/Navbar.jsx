import React from 'react'

const Navbar = (props) => {

    const handelSearch = (e) => {
        if (e.target.value.length > 0) {
            // props.onSearch(e.target.value)
        }
    }

    return (
        <nav className="py-4 px-10 flex items-center justify-between border-b border-slate-600">
            <div>
                <h1 className="font-semibold text-4xl">Notes</h1>
            </div>

            <div className='w-3/12'>
                <input onChange={handelSearch} className="input" type="text" name="search" id="search" placeholder="Search ..." />
            </div>
        </nav>
    )
}

export default Navbar