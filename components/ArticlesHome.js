import ArticleHome from './ArticleHome';

const ArticlesHome = ({ resultado }) => {
    const articulos = resultado.results

    return (
        <div className='articles'>
            <h1 className='text-center grid grid-cols-3 justify-center items-center text-4xl mt-8 mb-4 after:content-[""] after:block after:w-full after:h-1 after:bg-yellow-400 before:content-[""] before:block before:w-full before:h-1 before:bg-yellow-400'>Today`s articles</h1>

            <div className='grid sm:grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
                {articulos.map(article => (
                    <ArticleHome key={article.title} article={article}/>
                ))}
            </div>
        </div>
    )
}

export default ArticlesHome