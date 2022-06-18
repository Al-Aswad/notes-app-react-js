import NoteForm from "./components/Form/NoteForm";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App bg-slate-900 h-screen w-full text-white">

      <header>
        <Navbar />
      </header>

      <main className="flex justify-center mt-10">
        <NoteForm/>
      </main>

    </div>
  );
}

export default App;
