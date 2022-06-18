import React from 'react'

const NoteForm = () => {
  return (
    <div className="w-full mx-10 sm:mx-0 sm:w-6/12 bg-slate-800 py-4 px-6 rounded-md">
        <h1 className="font-semibold text-md mb-10">Buat Catatan</h1>
        <div className="flex gap-4 flex-col">
        <div className="flex flex-col items-end gap-1">
            <span className="text-slate-400">Sisa Karakter : 50</span>
            <input className="input" type="text" name="search" id="search" placeholder="Catatan ..." />
        </div>
        <div>
            <textarea className="input" name="" id="" cols="30" rows="10" placeholder="Tulis catatanmu di sini"></textarea>
        </div>
            <buttonc className="button">Buat</buttonc>
        </div>
    </div>
  )
}

export default NoteForm