import React from 'react'

const Card = (props) => {
    const { title, body, createdAt } = props.note
    return (
        <div className="card p-2 bg-slate-700 rounded-md flex flex-col gap-2 shadow-sm justify-between">
            <div>
                <h4 className="font-semibold text-lg">{title}</h4>
                <p className="text-slate-500">{createdAt}</p>
                <p className="text-thin text-sm">{body}</p>
            </div>
            <div className="flex justify-between mt-4">
                <button className="text-red-700 hover:bg-red-500 py-1 hover:text-white rounded-md text-center w-full">Delete</button>
                <button className="text-yellow-700 hover:bg-yellow-500 hover:text-white rounded-md w-full">Arsipkan</button>
            </div>
        </div>
    )
}

export default Card