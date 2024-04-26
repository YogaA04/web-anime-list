// "use client"
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
// import { useState } from "react";

const Page = async ({ params }) => {
    // const [loading, useLoading] = useState(true)

    const keyword = decodeURIComponent(params.keyword)
    const respons = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${params.keyword}`)
    const searchAnime = await respons.json()
    // if (searchAnime) useLoading(!loading)

    return (
        <div className="p-4">
            {/* {loading && <div class="spinner"></div>} */}
            <Header title={`Pencarian untuk ${keyword}...`} />
            <AnimeList api={searchAnime} />
        </div>
    );
}

export default Page