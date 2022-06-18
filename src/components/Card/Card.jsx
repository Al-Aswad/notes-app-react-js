import React from 'react'

const Card = () => {
    return (
        <div className="card p-2 bg-slate-700 rounded-md flex flex-col gap-2 shadow-sm">
            <h4 className="font-semibold text-lg">Judul</h4>
            <p className="text-slate-500">Waktu</p>
            <p className="text-thin text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis exercitationem molestiae quia maiores unde placeat, at sint. Voluptates quam pariatur dicta dolorum veritatis, molestias excepturi quae, voluptate, mollitia odio soluta!</p>
            <div className="flex justify-between mt-4">
                <button className="text-red-700 hover:bg-red-500 py-1 hover:text-white rounded-md text-center w-full">Delete</button>
                <button className="text-yellow-700 hover:bg-yellow-500 hover:text-white rounded-md w-full">Arsipkan</button>
            </div>
        </div>
    )
}

export default Card