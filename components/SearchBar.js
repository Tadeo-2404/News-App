import { useState } from "react"
import ResultSearch from "./ResultSearch";

const SearchBar = () => {
  const [busquedaRealizada, actualizarBusqueda] = useState(false);
  const [buscado, transferirBuscado] = useState("");

  return (
    <div className="mt-20 p-20 flex flex-col justify-center items-center bg-searchBar bg-top bg-no-repeat bg-cover bg-fixed">
      <div className="p-4 flex flex-col justify-center items-center gap-y-4">
        <div className="text-5xl font-extrabold text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-yellow-400">
            Your articles one click away...
          </span>
        </div>        
        <div className="sm:flex">
          <input type="text" placeholder="Your Search..." className="p-2 outline-none border-none" required onChange={(e) => transferirBuscado(e.target.value)}/>
          <button className="border-none bg-yellow-400 text-white p-2" onClick={() => actualizarBusqueda(!busquedaRealizada)}>Search</button>
        </div>
       { busquedaRealizada && <ResultSearch buscado={buscado} busquedaRealizada={busquedaRealizada} />}
      </div>
    </div>
  )
}

export default SearchBar