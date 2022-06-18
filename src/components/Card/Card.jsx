import React from 'react'

const Card = (props) => {
    const { id, title, body, createdAt } = props.note
    // const { onDeleteNote, onEditNote } = props;
    console.log('card props ', props.onChangeArchive)
    // console.log("fn Props ", props.onChangeArchive)
    const handelDelete = (id) => {
        // props.onDelete(id)
    }

    const handelArchive = (id) => {
        props.onChangeArchive(id);
    }

    return (
        <div className="card p-2 bg-slate-700 rounded-md flex flex-col gap-2 shadow-sm justify-between">
            <div>
                <h4 className="font-semibold text-lg">{title}</h4>
                <p className="text-slate-500">{createdAt}</p>
                <p className="text-thin text-sm mt-2">{body}</p>
            </div>
            <div className="flex justify-between mt-4">
                <button onClick={handelDelete(id)} className="text-red-700 hover:bg-red-500 py-1 hover:text-white rounded-md text-center w-full">
                    Delete
                </button>
                <button onClick={() => handelArchive(id)} className="text-yellow-700 hover:bg-yellow-500 hover:text-white rounded-md w-full">
                    {props.note.archived ? 'Pindahkan' : 'Archive'}
                </button>
            </div>
        </div>
    )
}

export default Card