import { NextResponse } from 'next/server'
import { getRandomIntInclusive } from '@/utils/getRandomIntInclusive'

const FACTS_MOCK = [
    {
        id: 1,
        fact: 'The nucleus of a cell in your body is less than 10 micrometers across, yet it contains two meters (about 6 feet) of packaged DNA.',
    },
    {
        id: 2,
        fact: ' In a room of 23 people there’s a 50% chance that two people have the same birthday.',
    },
    {
        id: 3,
        fact: 'The hour and minute hand of a clock coincide 22 times in a day.',
    },
]

export const GET = () => {
    const randomNumber = getRandomIntInclusive(0, 2)
    const data = FACTS_MOCK[randomNumber]

    return NextResponse.json({ ...data })
}
