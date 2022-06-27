
const title = ({ resultado }) => {
    const libros = resultado.results.books;
    const titulo = resultado.results.list_name;
    console.log(resultado)

    return (
        <div className="mt-28">
            <h1 className='text-center grid grid-cols-3 justify-center items-center text-4xl mt-8 mb-4 after:content-[""] after:block after:w-full after:h-1 after:bg-yellow-400 before:content-[""] before:block before:w-full before:h-1 before:bg-yellow-400'>{titulo}</h1>
            <div className='grid sm:grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
                {libros.map((libro) => (
                    <div key={libro.isbns[0].isbn10} className='flex flex-col bg-gray-200 p-5 w-full text-center gap-y-4'>
                        {libro.book_image != "" &&
                            <img loading="lazy" src={libro.book_image} alt='img-article' className='w-full max-h-96' />
                        }
                        <h3 className="text-3xl text-bold">{libro.title}</h3>
                        <h4>{libro.author} - {libro.publisher}</h4>
                        <p>{libro.description}</p>
                        <a href={libro.buy_links[0].url} className="bg-yellow-400 p-2 uppercase">Buy online</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const titulo = context.query.title
    const KEY = "CD2Tgd7zbDcP3pRTi0kwVInpslwrDnbg";
    const data = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${titulo}.json?api-key=${KEY}`);
    const resultado = await data.json();

    return {
        props: {
            resultado
        }
    }
}

export default title