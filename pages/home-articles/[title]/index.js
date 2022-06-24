import { useRouter } from 'next/router'

const HomeArticles = ({ resultado }) => {

    const router = useRouter();
    const { title } = router.query

    const articulos = resultado.results;
    const newArr = []

    articulos.forEach(buscado => {
        if (buscado.title === title) {
            newArr.title = buscado.title
            newArr.abstract = buscado.abstract
            newArr.id = buscado.id;
            newArr.byline = buscado.byline
            newArr.img = buscado.media[0]['media-metadata'][0].url
        }
    });

    return (
        <div className='flex flex-col p-5 w-full text-center gap-y-4 justify-center items-center'>
            <img src={newArr.img} alt='img-article' className='sm:w-full md:w-80 lg:w-96 xl:w-96 h-50' />
            <h3 className='font-bold text-2xl lg:w-96 xl:w-96'>{newArr.title}</h3>
            <div className='lg:w-96 xl:w-96'>
                <p>{newArr.abstract}</p>
                <p className='font-thin text-left p-2'>{newArr.byline}</p>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {

    const KEY = "CD2Tgd7zbDcP3pRTi0kwVInpslwrDnbg";
    const data = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${KEY}`);
    const resultado = await data.json();

    return {
        props: {
            resultado
        }
    }
}

export default HomeArticles