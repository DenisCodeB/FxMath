import { useCallback } from 'react'
import useSWRImmutable from 'swr/immutable'
import { fetchRandomExploreStuff } from '@/api/fetchRandomExploreStuff'

const INITIAL_QUOTE = {
    id: 1,
    quote: 'Mathematics is the music of reason.',
    author: 'James Joseph Sylvester',
}

const INITIAL_FACT = {
    id: 1,
    fact: 'The hour and minute hand of a clock coincide 22 times in a day.',
}

export const useApiDataFetch = <T>(url: string): T => {
    let {
        data = {} as T,
        isLoading,
        error,
    } = useSWRImmutable(url, fetchRandomExploreStuff<T>)

    const toEachRoute = useCallback(
        (obj1: any, obj2: any) => {
            if (/\/quote/.test(url)) data = obj1
            else if (/\/fact/.test(url)) data = obj2
        },
        [isLoading, error]
    )

    if (isLoading) {
        toEachRoute(
            {
                id: 0,
                quote: 'Loading',
                author: 'Loading',
            },
            {
                id: 0,
                fact: 'Loading',
            }
        )
    }

    if (error) {
        toEachRoute(INITIAL_QUOTE, INITIAL_FACT)
    }

    return data
}
