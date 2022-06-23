import Head from 'next/head'
import Image from 'next/image'

export default function Home({ resultado }) {

  const articulos = resultado.results
  const arr = [];

  articulos.forEach(article => {
      const newArr = [];
      newArr.id = article.id
      newArr.title = article.title;
      newArr.abstract = article.abstract
      newArr.url = article.url
      newArr.byline = article.byline

      if(!article.media.length == 0) {
         newArr.img = article.media[0]['media-metadata'][0].url    
         arr.push(newArr)  
      }

  });

  return (
    <div className='home'>
      <Head>
        <title>News</title>
      </Head>

      <h1 className='text-center grid grid-cols-3 justify-center items-center text-4xl mt-8 mb-4 after:content-[""] after:block after:w-full after:h-1 after:bg-yellow-400 before:content-[""] before:block before:w-full before:h-1 before:bg-yellow-400'>Today`s articles</h1>

      <div className='grid sm:grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
      {arr.map(article => (
        <div key={article.id} className='flex flex-col bg-gray-200 p-5 w-full text-center gap-y-4'>
          <img src={article.img} alt='img-article' className='w-full h-50'/>
          <h3 className='font-bold text-2xl'>{article.title}</h3>
          <div>
            <p>{article.abstract}</p>
            <p className='font-thin text-left p-2'>{article.byline}</p>
          </div>
          <a className='p-2 bg-yellow-400 uppercase font-medium' href={article.url}>Read More</a>
        </div>
      ))}
      </div>

    </div>
  )
}

export const getStaticProps = async () => {
  const KEY = "CD2Tgd7zbDcP3pRTi0kwVInpslwrDnbg";
  const data = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${KEY}`);
  const resultado = await data.json();

  return {
    props: {
      resultado
    }
  }
}
