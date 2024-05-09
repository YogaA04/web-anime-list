import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api_lips";

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=7")

  return (
    <div className="p-4">
      <Header link={'/populer'} linkTitile={'Lihat semua'} title={'Paling populer'} />
      <AnimeList api={topAnime} />
    </div>
  );
}

export default Page
