import Card from "./components/Card/Card";
import NoteForm from "./components/Form/NoteForm";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App bg-slate-900 min-h-screen w-full text-white pb-20">

      <header>
        <Navbar />
      </header>

      <main className="flex flex-col items-center mt-10 gap-4">
        <NoteForm />

        <div className="text-left w-10/12 py-4 flex flex-col items-center">
          <div className="text-left flex w-full">
            <h1 className="font-semibold text-xl mb-6">Catatan Aktif</h1>
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="text-left w-10/12 py-4 flex flex-col items-center">
          <div className="text-left flex w-full">
            <h1 className="font-semibold text-xl mb-6">Arsip</h1>
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

      </main>

    </div>
  );
}

export default App;
