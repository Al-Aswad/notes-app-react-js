import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import NoteForm from "./components/Form/NoteForm";
import Navbar from "./components/Navbar/Navbar";
import { getData } from "./utils/data"

function App() {
    const data = getData();

    const [notesState, setNotesState] = useState(data);
    const [allNotes, setAllNotes] = useState(data);
    const [activeNotes, setActiveNotes] = useState([]);
    const [archivedNotes, setArchivedNotes] = useState([]);

    const handleAddNote = (note) => {
        notesState.push(note);
        setNotesState(notesState);
        fileterNotes();
    }

    const handleArchiveNote = (noteId) => {
        const index = notesState.findIndex(note => note.id === noteId); if (index !== -1) {
            if (notesState[index].archived) {
                notesState[index].archived = false;
            }
            else {
                notesState[index].archived = true;
            }

            // setNotesState(notesState);
            fileterNotes();
        }
    }

    const handleDeleteNote = (noteId) => {
        const index = notesState.findIndex(note => note.id === noteId); if (index !== -1) {
            notesState.splice(index, 1);
            setNotesState(notesState);
            fileterNotes();
        }
    }

    const hanldeSearch = (search) => {

        console.log("All Notes ", allNotes);
        if (search.length > 0) {
            const filteredNotes = allNotes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()));
            setNotesState(filteredNotes);
            fileterNotes();
        }
    }


    const fileterNotes = () => {
        setActiveNotes(notesState.filter(note => !note.archived));
        setArchivedNotes(notesState.filter(note => note.archived));
    }

    useEffect(() => {
        console.log("render");
        fileterNotes();

        return () => {
            console.log("unmount");
        }
        // setAllNotes(notesState);
    }, [notesState]);

    return (
        <div className="w-full min-h-screen pb-20 text-white App bg-slate-900">

            <header>
                <Navbar onSearch={(value) => { hanldeSearch(value) }} />
            </header>

            <main className="flex flex-col items-center gap-4 mt-10">

                <NoteForm onAddNote={(value) => { handleAddNote(value) }} />

                <div className="flex flex-col items-center w-10/12 py-4 text-left">
                    <div className="flex w-full text-left">
                        <h1 className="mb-6 text-xl font-semibold">Catatan Aktif</h1>
                    </div>
                    {
                        activeNotes.length > 0 &&
                        <div className="grid justify-start w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
                            {
                                activeNotes.map(note => (
                                    <Card onChangeArchive={(value) => handleArchiveNote(value)} onDeleteNote={(value) => handleDeleteNote(value)} key={note.id} note={note} />
                                ))
                            }
                        </div>
                    }
                    {
                        activeNotes.length === 0 &&
                        <div className="flex justify-center w-full">
                            <p>Tidak ada Catatan</p>
                        </div>
                    }

                </div>

                <div className="flex flex-col items-center w-10/12 py-4 text-left">
                    <div className="flex w-full text-left">
                        <h1 className="mb-6 text-xl font-semibold">Catatan Aktif</h1>
                    </div>
                    {
                        archivedNotes.length > 0 &&
                        <div className="grid justify-start w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
                            {
                                archivedNotes.map(note => (
                                    <Card onChangeArchive={(value) => handleArchiveNote(value)} onDeleteNote={(value) => handleDeleteNote(value)} key={note.id} note={note} />
                                ))
                            }
                        </div>
                    }
                    {
                        archivedNotes.length === 0 &&
                        <div className="flex justify-center w-full">
                            <p>Tidak ada Catatan</p>
                        </div>
                    }
                </div>
            </main>
        </div>
    );
}

export default App;
