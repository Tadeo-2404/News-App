import Head from 'next/head'
import ArticlesHome from '../components/ArticlesHome';
import SearchBar from '../components/SearchBar';

export default function Home({ resultado }) {
  return (
    <div className='home'>
      <Head>
        <title>News</title>
      </Head>

      <SearchBar />
      <ArticlesHome resultado={resultado}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const KEY = "CD2Tgd7zbDcP3pRTi0kwVInpslwrDnbg";
  const data = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${KEY}`);
  const resultado = await data.json();

  return {
    props: {
      resultado
    }
  }
}
