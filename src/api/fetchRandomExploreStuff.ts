export const fetchRandomExploreStuff = async (url: string) => {
    const response = await fetch(url)

    return await response.json()

    // if (isOk && status?.toString().match(/2../) && data?.id)
    //     return {
    //         status,
    //         data,
    //         isOk,
    //     }
    // else if (url.match(/(?!.+\/).*/)?.[0] === '/quote') {
    //     data = {
    //         id: 0,
    //         quote: 'Loading',
    //         author: 'Loading',
    //     } as T
    // } else {
    //     data = {
    //         id: 0,
    //         fact: 'Loading',
    //     } as T
    // }
    // return {
    //     status,
    //     data,
    //     isOk: false,
    // }
}
