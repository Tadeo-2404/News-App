import Link from "next/link"

const ArticleSearch = ({article}) => {
  return (
    <div key={article._id} className='flex flex-col bg-gray-200 p-5 w-full text-center gap-y-4'>
    { article.multimedia.length > 0 &&
      <img loading="lazy" src={'https://www.nytimes.com/' + article.multimedia[0].url} alt='img-article' className='w-full h-50' />
    }
    <h3 className='font-bold text-2xl'>{article.headline.main}</h3>
    <div>
      <p className='font-thin text-left p-2'>{article.pub_date}</p>
      <p className='font-thin text-left p-2'>{article.byline.original}</p>
    </div>
    <Link href='/search-articles/[title]'  as={`/search-articles/${article.headline.main}`} >
      <a className='p-2 bg-yellow-400 uppercase font-medium'>Read more</a>
    </Link> 
    </div>
  )
}

export default ArticleSearch