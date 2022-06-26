import { useRouter } from "next/router";

const SearchArticles = ({ resultado }) => {
    const router = useRouter();
    const { title } = router.query;

    const articulos = resultado.response.docs;
    let newArr = []

    articulos.forEach(buscado => {
        if (buscado.headline.main.includes(title)) {
            newArr = buscado
        }
    });

    return (
        <div className='flex flex-col p-5 w-full text-center gap-y-4 justify-center items-center mt-20'>
            {newArr.multimedia.length > 0 &&
                <img loading="lazy" src={'https://www.nytimes.com/' + newArr.multimedia[0].url} alt='img-article' className='sm:w-full md:w-80 lg:w-96 xl:w-96 h-50' />
            }
            <h3 className='font-bold text-2xl lg:w-96 xl:w-96'>{newArr.headline.main}</h3>
            <div className='lg:w-96 xl:w-96'>
                <p>{newArr.lead_paragraph}</p>
                <p className='font-thin text-left p-2'>{newArr.updated_date}</p>
                <p className='font-thin text-left p-2'>{newArr.pub_date}</p>
                <p className='font-thin text-left p-2'>{newArr.byline.original}</p>
            </div>
            <a className='p-2 bg-yellow-400 uppercase font-medium w-full' href={newArr.web_url}>See Article</a>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const buscado = context.query.title
    const KEY = "CD2Tgd7zbDcP3pRTi0kwVInpslwrDnbg";
    const data = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${buscado}&api-key=${KEY}`);
    const resultado = await data.json();

    return {
        props: {
            resultado
        }
    }
}

export default SearchArticles