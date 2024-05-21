import Image from "next/image";
import Link from "next/link";
import Header from "../Header";

const Page = () => {
    return (
        <section className="m-4">
            <Header title="My Collection"/>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/" className="relative border-2 border-yellow-500 rounded click">
                    <Image src="" alt="" className="w-full rounded" width={350} height={350}></Image>
                    <div className="absolute flex items-center justify-center bottom-0 w-full bg-yellow-500 h-16">
                        <h2 className="text-xl text-center">judul anime</h2>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-yellow-500 rounded click">
                    <Image src="" alt="" className="w-full rounded" width={350} height={350}></Image>
                    <div className="absolute flex items-center justify-center bottom-0 w-full bg-yellow-500 h-16">
                        <h2 className="text-xl text-center">judul anime</h2>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-yellow-500 rounded click">
                    <Image src="" alt="" className="w-full rounded" width={350} height={350}></Image>
                    <div className="absolute flex items-center justify-center bottom-0 w-full bg-yellow-500 h-16">
                        <h2 className="text-xl text-center">judul anime</h2>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-yellow-500 rounded click">
                    <Image src="" alt="" className="w-full rounded" width={350} height={350}></Image>
                    <div className="absolute flex items-center justify-center bottom-0 w-full bg-yellow-500 h-16">
                        <h2 className="text-xl text-center">judul anime</h2>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Page