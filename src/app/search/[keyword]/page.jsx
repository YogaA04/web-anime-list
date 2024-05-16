import { getAnimeResponse } from "@/libs/api_lips";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {

    const keyword = decodeURIComponent(params.keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${keyword}`)

    return (
        <div className="p-4">
            <Header title={`Pencarian untuk ${keyword}...`} />
            <AnimeList api={searchAnime} />
        </div>
    );
}

export default Page