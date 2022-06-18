import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import NoteForm from "./components/Form/NoteForm";
import Navbar from "./components/Navbar/Navbar";
import { getData } from "./utils/data"

function App() {
    const data = getData();

    const [notesState, setNotesState] = useState(data);
    const [activeNotes, setActiveNotes] = useState([]);
    const [archivedNotes, setArchivedNotes] = useState([]);

    const handleAddNote = (note) => {
        console.log("Tambah Note")
        notesState.push(note);
        console.log(notesState);
        setNotesState(notesState);
        fileterNotes();
    }

    const fileterNotes = () => {
        console.log("Filter handle");
        setActiveNotes(notesState.filter(note => !note.archived));
        setArchivedNotes(notesState.filter(note => note.archived));
    }

    useEffect(() => {
        console.log("Render");
        fileterNotes();
    }, [notesState]);

    return (
        <div className="App bg-slate-900 min-h-screen w-full text-white pb-20">

            <header>
                <Navbar />
            </header>

            <main className="flex flex-col items-center mt-10 gap-4">
                <NoteForm onAddNote={(value) => { handleAddNote(value) }} />

                <div className="text-left w-10/12 py-4 flex flex-col items-center">
                    <div className="text-left flex w-full">
                        <h1 className="font-semibold text-xl mb-6">Catatan Aktif</h1>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {activeNotes.map(note => (
                            <Card key={note.id} note={note} />
                        ))}
                    </div>
                </div>

                <div className="text-left w-10/12 py-4 flex flex-col items-center">
                    <div className="text-left flex w-full">
                        <h1 className="font-semibold text-xl mb-6">Catatan Aktif</h1>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {archivedNotes.map(note => (
                            <Card key={note.id} note={note} />
                        ))}
                    </div>
                </div>

            </main>

        </div>
    );
}

export default App;
