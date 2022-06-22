import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className="flex justify-around content-center p-7 bg-white shadow-xl fixed w-full">
            <h1 className="text-3xl hover:subpixel-antialiased font-bold uppercase">MyNews</h1>
            <ul className="grid grid-cols-3 no-underline uppercase gap-4 sm:hidden">
                <li className='justify-self-center self-center hover:underline underline-offset-1'>
                    <Link href="/">Best Sellers</Link>
                </li>
                <li className='justify-self-center self-center hover:underline underline-offset-1'>
                    <Link href="/">Top</Link>
                </li>
                <li className='justify-self-center self-center hover:underline underline-offset-1'>
                    <Link href="/">Popular</Link>
                </li>
            </ul>
            <div className='md:hidden lg:hidden xl:hidden justify-self-center self-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </div>
        </nav>
    )
}

export default NavBar