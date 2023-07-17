'use client'

import { useEffect } from 'react'

export const useRandom = <T>(arrayData: Array<T> = []): T => {
    const data = arrayData[0]

    // const arrayLength = arrayData.length
    // const randomNumber = Math.floor(Math.random() * arrayLength)
    // data = arrayData[randomNumber]

    return data
}
