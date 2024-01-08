export const useLocalStorage = <T>(key: string, data: T) => {
    return () => {
        const stringifyData = JSON.stringify(data)
        localStorage.setItem(key, stringifyData)
    }
}
