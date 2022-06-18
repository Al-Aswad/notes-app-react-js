import React from 'react'

const NoteForm = (props) => {

  // console.log(props.onAddNote)

  const [id, setId] = React.useState('')
  const [title, setTitle] = React.useState('')

  const [body, setBody] = React.useState('')
  const [archived, setArchived] = React.useState(false)


  const handelSubmit = (e) => {
    e.preventDefault()
    setId(+new Date())
    props.onAddNote({ id, title, body, archived })
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
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
            <span className="text-slate-400">Sisa Karakter : 50</span>
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