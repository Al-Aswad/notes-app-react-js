import React from 'react'

const SearchItem = () => {
  return (
    <div className='w-3/12'>
        <input className="w-full py-2 px-3 rounded-md focus:outline-none outline-none focus:ring-2 bg-slate-800 appearance-none ring-2 ring-slate-600 shadow-sm focus:ring-blue-500 text-slate-50" type="text" name="search" id="search" placeholder="Search ..."/>
    </div>
  )
}

export default SearchItem