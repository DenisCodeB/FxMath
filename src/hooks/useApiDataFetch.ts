import { useEffect, useState } from 'react'
import { fetchRandomExploreStuff } from '@/api/fetchRandomExploreStuff'
import useSWR from 'swr'

export const useApiDataFetch = <T>(url: string): T => {
    const { data = {} as T, error } = useSWR<T>(url, fetchRandomExploreStuff)

    return data
}
