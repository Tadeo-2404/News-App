import { useState } from "react"
import ArticleSearch from "./ArticleSearch";

const SearchBar = () => {
  const [busquedaRealizada, actualizarBusqueda] = useState(false);
  const [buscado, transferirBuscado] = useState("");
  const [buscadoArreglo, actualizarArreglo] = useState([])

  const realizarBusqueda = async () => {

    if (buscado) {

      actualizarBusqueda(true)

      const KEY = "CD2Tgd7zbDcP3pRTi0kwVInpslwrDnbg";
      const data = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${buscado}&api-key=${KEY}`);
      const resultado = await data.json();
      actualizarArreglo(resultado.response.docs)

    } else {
      actualizarBusqueda(false)
    }
  }

  return (
    <div className="mt-20 p-20 flex flex-col justify-center items-center bg-searchBar bg-top bg-no-repeat bg-cover bg-fixed">
      <div className="p-4 flex flex-col justify-center items-center gap-y-4">
        <div className="text-5xl font-extrabold text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-yellow-400">
            Your articles one click away...
          </span>
        </div>
        <div className="sm:flex">
          <input type="text" placeholder="Your Search..." className="p-2 outline-none border-none" required onChange={(e) => transferirBuscado(e.target.value)} />
          <button className="border-none bg-yellow-400 text-white p-2" onClick={realizarBusqueda}>Search</button>
        </div>
        {busquedaRealizada &&
          <div>
            <h1 className="text-center text-white text-4xl">Results for: {buscado}</h1>
            <div className='grid sm:grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
              {buscadoArreglo.map(article => (
                  <ArticleSearch article={article} key={article._id} />
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default SearchBar