import Image from "next/image"

const AnimeList = ({title, images}) => {
    return(
            <div>
                <Image src={images} alt="..." width={350} height={350} className="w-full max-h-64 object-cover rounded-t" />
                <p className="font-bold md:text-xl text-md p-4">{title}</p>
            </div>
    )
}

export default AnimeList