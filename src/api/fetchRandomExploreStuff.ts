export const fetchRandomExploreStuff = async <T>(url: string) => {
    const res = await fetch(url, { next: { revalidate: false } })

    if (!res.ok) {
        throw new Error('An error occurred while fetching the data.')
    }

    return res.json()
}
