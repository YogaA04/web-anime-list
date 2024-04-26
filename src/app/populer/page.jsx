'use client'

import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"

const Page = () => {

    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async() => {
        const resTopAnime = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
        const data = await resTopAnime.json()
        setTopAnime(data)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <div className="p-4">
            <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
            <AnimeList api={topAnime} />
            <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </div>
    )
}

export default Page