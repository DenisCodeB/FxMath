'use client'

import { useRandom } from '@/components/Explore/components/hooks/useRandom'
import { QUOTES_MOCK } from '@/utils/quotes'
import style from './Quote.module.scss'

interface IData {
    id: number
    quote: string
    author: string
}

const Quote = () => {
    const { quote, author } = useRandom<IData>(QUOTES_MOCK)

    return (
        <div className={style.quote}>
            <div>
                <div className={style.quote__text}>{quote}</div>
                <div className={style.quote__author}>{author}</div>
            </div>
        </div>
    )
}

export default Quote
