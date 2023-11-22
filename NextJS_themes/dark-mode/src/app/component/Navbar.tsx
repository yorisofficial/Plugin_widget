import Link from "next/link"
import ButtonTheme from "./ButtonTheme"

const Navbar = () => {
    return (
        <div>
            <nav className='w-full fixed h-fit py-4 px-4 xl:px-20 z-40 drop-shadow-xl bg-white dark:bg-slate-800 text-black dark:text-white flex justify-between items-center'>
                <div className="logo">
                    <Link href={'/'}>
                        <h1 className="text-3xl font-bold">Logo</h1>
                    </Link>
                </div>
                <div className="Menu"></div>
                <div className="Button">
                    <ButtonTheme />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
