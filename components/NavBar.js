import Link from 'next/link'
import { useState } from 'react'

const NavBar = () => {
    const [toggleNav, showToggleNav] = useState(false);

    const showNav = () => {
        showToggleNav(!toggleNav)
    }

    return (
        <div className='shadow-xl w-full fixed'>
            <nav className="flex justify-around content-center p-7 bg-white">
                <Link href="/"><h1 className="cursor-pointer text-3xl hover:subpixel-antialiased font-bold uppercase">MyNews</h1></Link>
                <ul className="grid grid-cols-3 no-underline uppercase gap-4 sm:hidden">
                    <li className='cursor-pointer justify-self-center self-center hover:underline underline-offset-1'>
                    <Link href="/">
                            <div className='relative'>
                                <div className='flex gap-x-2'>
                                    <h3>Best Sellers</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div className='absolute bg-white p-1 shadow-2xl'>
                                  <ul className='text-xs text-center'>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Paperback Trade Fiction</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Hardcover Ficiton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Hardcover NonFiciton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Young Adult Hardcover</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">E-Book Fiction</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">E-book NonFiciton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">advice and how to miscellaneous</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">childrens middle grade hardcover</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">picture books</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">series books</Link>
                                    </li>
                                  </ul>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className='cursor-pointer justify-self-center self-center hover:underline underline-offset-1'>
                    <Link href="/">
                            <div className='relative'>
                                <div className='flex gap-x-2'>
                                    <h3>Sections</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div className='absolute bg-white p-1 shadow-2xl'>
                                  <ul className='text-xs text-center'>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Paperback Trade Fiction</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Hardcover Ficiton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Hardcover NonFiciton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Young Adult Hardcover</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">E-Book Fiction</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">E-book NonFiciton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">advice and how to miscellaneous</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">childrens middle grade hardcover</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">picture books</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">series books</Link>
                                    </li>
                                  </ul>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className='cursor-pointer justify-self-center self-center hover:underline underline-offset-1'>
                    <Link href="/">
                            <div className='relative'>
                                <div className='flex gap-x-2'>
                                    <h3>Top stories</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div className='absolute bg-white p-1 shadow-2xl'>
                                  <ul className='text-xs text-center'>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Paperback Trade Fiction</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Hardcover Ficiton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Hardcover NonFiciton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Young Adult Hardcover</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">E-Book Fiction</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">E-book NonFiciton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">advice and how to miscellaneous</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">childrens middle grade hardcover</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">picture books</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">series books</Link>
                                    </li>
                                  </ul>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
                <div className='md:hidden lg:hidden xl:hidden justify-self-center self-center' onClick={showNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </nav>
            {toggleNav &&
                <ul className="grid grid-cols-3 no-underline uppercase gap-4 p-4 bg-white md:hidden lg:hidden xl:hidden transition-all">
                    <li className='cursor-pointer justify-self-center self-center hover:underline underline-offset-1'>
                        <Link href="/">
                            <div className='relative'>
                                <div className='flex gap-x-2'>
                                    <h3>Best Sellers</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div className='absolute bg-white p-1 shadow-2xl'>
                                  <ul className='text-xs text-center'>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Paperback Trade Fiction</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Hardcover Ficiton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Hardcover NonFiciton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Young Adult Hardcover</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">E-Book Fiction</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">E-book NonFiciton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">advice and how to miscellaneous</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">childrens middle grade hardcover</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">picture books</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">series books</Link>
                                    </li>
                                  </ul>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className='cursor-pointer justify-self-center self-center hover:underline underline-offset-1'>
                    <Link href="/">
                            <div className='relative'>
                                <div className='flex gap-x-2'>
                                    <h3>Sections</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div className='absolute bg-white p-1 shadow-2xl'>
                                  <ul className='text-xs text-center'>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">arts</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">automobiles</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">business</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">books</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">climate</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">education</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">fashion</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">food</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">health</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">job market</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Magazine</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">movies</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">real state</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">science</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">sports</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">technology</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">travel</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">u.s</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">world</Link>
                                    </li>
                                  </ul>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className='cursor-pointer justify-self-center self-center hover:underline underline-offset-1'>
                    <Link href="/">
                            <div className='relative'>
                                <div className='flex gap-x-2'>
                                    <h3>Top stories</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div className='absolute bg-white p-1 shadow-2xl'>
                                  <ul className='text-xs text-center'>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Paperback Trade Fiction</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Hardcover Ficiton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Hardcover NonFiciton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">Young Adult Hardcover</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">E-Book Fiction</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">E-book NonFiciton</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">advice and how to miscellaneous</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">childrens middle grade hardcover</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">picture books</Link>
                                    </li>
                                    <li className='p-1 hover:underline'>
                                        <Link href="/">series books</Link>
                                    </li>
                                  </ul>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            }
        </div>
    )
}

export default NavBar