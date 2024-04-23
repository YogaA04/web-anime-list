import AnimeList from "@/components/AnimeList";
import Link from "next/link";

const Home = async () => {

  const respons = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const anime = await respons.json()

  return (
    <div className="p-4">
      <div className="flex justify-between pb-4">
        <h1 className="text-1xl font-bold">Paling popular</h1>
        <Link href={'/popular'} className="underline hover:text-blue-500 click">lihat semua</Link>
      </div>
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
          {anime.data.map(data => {
            return(
              <Link href={`/${data.mal_id}`} key={data.mal_id} className="shadow-xl click">
                <AnimeList title={data.title} images={data.images.webp.image_url} />
              </Link>
            )
          })}
        </div>
      </div>
  );
}

export default Home
