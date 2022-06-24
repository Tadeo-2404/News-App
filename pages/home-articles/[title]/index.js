import { useRouter } from 'next/router'

const HomeArticles = ({ resultado }) => {
    const router = useRouter();
    const { title } = router.query
    const articulos = resultado.results;
    let newArr = []

    articulos.forEach(buscado => {
        if (buscado.title.includes(title)) {
            newArr = buscado;
        }
    });

    return (
        <div className='flex flex-col p-5 w-full text-center gap-y-4 justify-center items-center'>
            <img src={newArr.multimedia[0].url} alt='img-article' className='sm:w-full md:w-80 lg:w-96 xl:w-96 h-50' />
            <h3 className='font-bold text-2xl lg:w-96 xl:w-96'>{newArr.title}</h3>
            <div className='lg:w-96 xl:w-96'>
                <p>{newArr.abstract}</p>
                <p className='font-thin text-left p-2'>{newArr.updated_date}</p>
                <p className='font-thin text-left p-2'>{newArr.byline}</p>
            </div>
            <a className='p-2 bg-yellow-400 uppercase font-medium w-full' href={newArr.url}>See Article</a>
        </div>
    )
}

export const getServerSideProps = async () => {
    const KEY = "CD2Tgd7zbDcP3pRTi0kwVInpslwrDnbg";
    const data = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${KEY}`);
    const resultado = await data.json();
  
    return {
      props: {
        resultado
      }
    }
}

export default HomeArticles