import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App bg-slate-900 h-screen w-full text-white">
    
      <header>
            <Navbar/>
      </header>

      <main className="flex justify-center mt-10">
         <div className="w-full mx-10 sm:mx-0 sm:w-6/12 bg-slate-800 py-4 px-6 rounded-md">
            <h1 className="font-semibold text-md mb-10">Buat Catatan</h1>

            <div className="flex gap-4 flex-col">
                <div className="flex flex-col items-end gap-1">
                    <span className="text-slate-400">Sisa Karakter : 50</span>
                    <input className="w-full py-2 leading-6 text-sm px-3 rounded-md focus:outline-none outline-none focus:ring-2 bg-slate-600 appearance-none ring-2 ring-slate-600 shadow-sm focus:ring-blue-500 text-slate-50" type="text" name="search" id="search" placeholder="Catatan ..."/>
                </div>
                <div>
                    <textarea className="w-full py-2 px-3 text-sm rounded-md focus:outline-none outline-none focus:ring-2 bg-slate-600 appearance-none ring-2 ring-slate-600 shadow-sm focus:ring-blue-500 text-slate-50" name="" id="" cols="30" rows="10" placeholder="Tulis catatanmu di sini"></textarea>
                </div>
                <buttonc className="py-2 px-6 bg-blue-500 hover:bg-blue-400 shadow-sm text-white text-sm font-medium  rounded-md cursor-pointer text-center">Buat</buttonc>
            </div>
         </div>
      </main>

    </div>
  );
}

export default App;
