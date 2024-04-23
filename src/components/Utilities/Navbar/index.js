import Link from "next/link"

const Navbar = () => {
    return(
        <header className="bg-blue-500">
            <div className="flex justify-between p-4">
                <Link href="/" className="font-bold text-white text-2xl">Hii Wibbu</Link>
                <input placeholder="cari anime..." className=""/>
            </div>
        </header>
    )
}

export default Navbar