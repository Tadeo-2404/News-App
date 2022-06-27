
const section = ({ resultado }) => {
    const articulos = resultado.results
    const titulo = resultado.section;
    console.log(resultado)
    return (
        <div className="mt-24 sm:mt-28">
            <h1 className='text-center grid grid-cols-3 justify-center items-center text-4xl mt-8 mb-4 after:content-[""] after:block after:w-full after:h-1 after:bg-yellow-400 before:content-[""] before:block before:w-full before:h-1 before:bg-yellow-400'>{titulo}</h1>

            <div className='grid sm:grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
                {articulos.map(article => (
                    article.title &&
                    <div key={article.uri} className='flex flex-col bg-gray-200 p-5 w-full text-center gap-y-4'>
                        {article.multimedia != null &&
                            <img loading="lazy" src={article.multimedia[0].url} alt='img-article' className='w-full max-h-40' />
                        }
                        <h3 className='font-bold text-2xl'>{article.title}</h3>
                        <div>
                            <p className="text-1xl">{article.abstract}</p>
                            <p className='font-thin text-left p-2 mt-2'>{article.updated_date}</p>
                            <p className='font-thin text-left p-2'>{article.byline}</p>
                        </div>
                        <a className='p-2 bg-yellow-400 uppercase font-medium' href={article.url}>See article</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const section = context.query.section
    const KEY = "CD2Tgd7zbDcP3pRTi0kwVInpslwrDnbg";
    const data = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${KEY}`);
    const resultado = await data.json();

    return {
        props: {
            resultado
        }
    }
}

export default section