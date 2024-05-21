import Image from "next/image";
import Link from "next/link";
import Header from "../Header";

const Page = () => {
    return (
        <section className="m-4">
            <Header title="My Comment"/>

            <div className="pt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/" className="flex justify-center items-center bg-yellow-500 h-16 rounded-t-3xl rounded-r-3xl click">
                        <h2 className="text-xl text-center">wkw</h2>
                </Link>
                <Link href="/" className="flex justify-center items-center bg-yellow-500 h-16 rounded-t-3xl rounded-r-3xl click">
                        <h2 className="text-xl text-center">wkw</h2>
                </Link>
                <Link href="/" className="flex justify-center items-center bg-yellow-500 h-16 rounded-t-3xl rounded-r-3xl click">
                        <h2 className="text-xl text-center">wkw</h2>
                </Link>
                <Link href="/" className="flex justify-center items-center bg-yellow-500 h-16 rounded-t-3xl rounded-r-3xl click">
                        <h2 className="text-xl text-center">wkw</h2>
                </Link>
            </div>
        </section>
    )
}

export default Page