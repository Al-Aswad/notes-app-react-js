import React from 'react'

const NoteForm = (props) => {

    const [id, setId] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [titleLength, setTitleLength] = React.useState(50)

    const [body, setBody] = React.useState('')
    const [archived, setArchived] = React.useState(false)
    const [createdAt, setCreatedAt] = React.useState(new Date().toISOString())


    const handelSubmit = (e) => {
        e.preventDefault()
        const date = new Date().toISOString()
        console.log(date)
        setId(+new Date())
        setCreatedAt(new Date().toISOString())

        if (title.length > 0 || body.length > 0) {
            props.onAddNote({ id, title, body, archived, createdAt })
        } else {
            alert('Title atau body harus diisi')
        }
    }

    const handleChangeTitle = (e) => {
        if (e.target.value.length <= 50) {
            setTitleLength(50 - e.target.value.length)
            setTitle(e.target.value)
        } else {
            alert('Title is too long')
        }
    }

    const handleChangeBody = (e) => {
        setBody(e.target.value)
    }

    return (
        <div className="w-full mx-10 sm:mx-0 sm:w-6/12 bg-slate-800 py-4 px-6 rounded-md">
            <h1 className="font-semibold text-md mb-10">Buat Catatan</h1>
            <form onSubmit={handelSubmit} action="">
                <div className="flex gap-4 flex-col">
                    <div className="flex flex-col items-end gap-1">
                        <span className="text-slate-400">Sisa Karakter : {titleLength}</span>
                        <input className="input" value={title} onChange={handleChangeTitle} type="text" name="search" id="search" placeholder="Catatan ..." />
                    </div>
                    <div>
                        <textarea className="input" value={body} name="" id="" cols="30" rows="10" placeholder="Tulis catatanmu di sini" onChange={handleChangeBody}>{body}</textarea>
                    </div>
                    <button type="submit" className="button">Buat</button>
                </div>
            </form>
        </div>
    )
}

export default NoteForm