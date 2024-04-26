import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {

  const resTopAnime = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const topAnime = await resTopAnime.json()

  return (
    <div className="p-4">
      <Header link={'/populer'} linkTitile={'Lihat semua'} title={'Paling populer'} />
      <AnimeList api={topAnime} />
    </div>
  );
}

export default Page
