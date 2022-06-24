import Link from 'next/link'

const ArticleHome = ({ article }) => {
    return (
        <div key={article.id} className='flex flex-col bg-gray-200 p-5 w-full text-center gap-y-4'>
            <img src={article.img} alt='img-article' className='w-full h-50' />
            <h3 className='font-bold text-2xl'>{article.title}</h3>
            <div>
                {/* <p>{article.abstract}</p> */}
                <p className='font-thin text-left p-2'>{article.byline}</p>
            </div>
            <Link href='/home-articles/[title]' as={`/home-articles/${article.title}`}>
                <a className='p-2 bg-yellow-400 uppercase font-medium'>Read more</a>
            </Link>
        </div>
    )
}

export default ArticleHome