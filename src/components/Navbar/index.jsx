import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return(
        <header className=" bg-sky-500 ">
            <div className="md:flex cols justify-between items-center md:p-4 p-2 ">
                <Link href="/" className="font-bold text-2xl">ANIME LIST</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar