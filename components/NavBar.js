import Link from 'next/link'
import { useState } from 'react'

const NavBar = () => {
    const [toggleNav, showToggleNav] = useState(false);
    const [toggleLink, showToggleLink] = useState(false)
    const [toggleLink_1, showToggleLink_1] = useState(false)

    const showNav = () => {
        showToggleNav(!toggleNav)
    }

    const showLink = () => {
        showToggleLink(!toggleLink)
    }

    const showLink_1 = () => {
        showToggleLink_1(!toggleLink_1)
    }

    return (
        <div className='shadow-xl w-full fixed'>
            <nav className="flex justify-around content-center p-7 bg-white">
                <Link href="/"><h1 className="cursor-pointer text-3xl hover:subpixel-antialiased font-bold uppercase">MyNews</h1></Link>
                <ul className="grid grid-cols-2 no-underline uppercase gap-4 sm:hidden">
                    <li className='cursor-pointer justify-self-center self-center hover:underline underline-offset-1'>
                            <div className='relative'>
                                <div className='flex gap-x-2'>
                                    <h3>Best Sellers</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={showLink}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                {
                                    toggleLink &&
                                    <div className='absolute bg-white p-1 shadow-2xl'>
                                        <ul className='text-xs text-center'>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/trade-fiction-paperback">Paperback Trade Fiction</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/hardcover-fiction">Hardcover Ficiton</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/hardcover-nonfiction">Hardcover NonFiciton</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/young-adult-hardcover">Young Adult Hardcover</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/combined-print-and-e-book-fiction">E-Book Fiction</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/combined-print-and-e-book-nonfiction">E-book NonFiciton</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/advice-how-to-and-miscellaneous">advice and how to miscellaneous</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/childrens-middle-grade-hardcover">childrens middle grade hardcover</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/picture-books">picture books</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/series-books">series books</Link>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>
                    </li>
                    <li className='cursor-pointer justify-self-center self-center hover:underline underline-offset-1'>
                            <div className='relative'>
                                <div className='flex gap-x-2'>
                                    <h3>Top stories</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={showLink_1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                {
                                    toggleLink_1 &&
                                    <div className='absolute bg-white p-1 shadow-2xl'>
                                        <ul className='text-xs text-center'>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/arts">arts</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/automobiles">automobiles</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/books">books</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/business">business</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/fashion">fashion</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/health">health</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/insider">insider</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/magazine">Magazine</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/movies">movies</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/opinion">opinion</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/politics">politics</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/science">science</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/sports">sports</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/technology">technology</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/travel">travel</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/us">u.s</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/world">world</Link>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>
                    </li>
                </ul>
                <div className='md:hidden lg:hidden xl:hidden justify-self-center self-center' onClick={showNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </nav>
            {toggleNav &&

                <ul className="grid grid-cols-2 no-underline uppercase gap-4 p-4 bg-white md:hidden lg:hidden xl:hidden transition-all">
                    <li className='cursor-pointer justify-self-center self-center hover:underline underline-offset-1'>
                            <div className='relative'>
                                <div className='flex gap-x-2'>
                                    <h3>Best Sellers</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={showLink}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                {
                                    toggleLink &&
                                    <div className='absolute bg-white p-1 shadow-2xl'>
                                        <ul className='text-xs text-center'>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/trade-fiction-paperback">Paperback Trade Fiction</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/hardcover-fiction">Hardcover Ficiton</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/hardcover-nonfiction">Hardcover NonFiciton</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/young-adult-hardcover">Young Adult Hardcover</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/combined-print-and-e-book-fiction">E-Book Fiction</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/combined-print-and-e-book-nonfiction">E-book NonFiciton</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/advice-how-to-and-miscellaneous">advice and how to miscellaneous</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/childrens-middle-grade-hardcover">childrens middle grade hardcover</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/picture-books">picture books</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/best-sellers/series-books">series books</Link>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>
                    </li>
                    <li className='cursor-pointer justify-self-center self-center hover:underline underline-offset-1'>
                            <div className='relative'>
                                <div className='flex gap-x-2'>
                                    <h3>Top stories</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={showLink_1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                {
                                    toggleLink_1 &&
                                    <div className='absolute bg-white p-1 shadow-2xl'>
                                        <ul className='text-xs text-center'>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/arts">arts</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/automobiles">automobiles</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/books">books</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/business">business</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/fashion">fashion</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/health">health</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/insider">insider</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/magazine">Magazine</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/movies">movies</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/opinion">opinion</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/politics">politics</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/science">science</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/sports">sports</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/technology">technology</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/travel">travel</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/us">u.s</Link>
                                            </li>
                                            <li className='p-1 hover:underline'>
                                                <Link href="/top-stories/world">world</Link>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>
                    </li>
                </ul>
            }
        </div>
    )
}

export default NavBar