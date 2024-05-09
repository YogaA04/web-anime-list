export const getAnimeResponse = async(reques, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${reques}?${query}`)
    const data = await response.json()
    return data
}