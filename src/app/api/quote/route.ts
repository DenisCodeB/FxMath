import { NextResponse } from 'next/server'
import { getRandomIntInclusive } from '@/utils/getRandomIntInclusive'

const QUOTES_MOCK = [
    {
        id: 1,
        quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
        author: 'Albert Einstein',
    },
    {
        id: 2,
        quote: 'Mathematics is the music of reason.',
        author: 'James Joseph Sylvester',
    },
    {
        id: 3,
        quote: '‘Obvious’ is the most dangerous word in mathematics.',
        author: 'Eric Temple Bell',
    },
]

export const GET = () => {
    const randomNumber = getRandomIntInclusive(0, 2)
    const data = QUOTES_MOCK[randomNumber]

    return NextResponse.json({ ...data })
}
