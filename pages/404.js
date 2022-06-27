import Link from "next/link";

export default function Custom404() {
    return (
        <div className="flex justify-center min-h-screen sm:p-8">
            <div className="mt-24 sm:mt-20 flex flex-col justify-center content-center text-center max-w-fit">
                <h1 className="text-3xl"><span className="text-yellow-400">Ooops!!</span> It seems the link you entered is not available</h1>
                <Link href="/">
                    <button className="p-4 bg-yellow-500 text-white rounded-3xl mt-4 uppercase">
                        Go to HomePage
                    </button>
                </Link>
            </div>
        </div>
    )
}