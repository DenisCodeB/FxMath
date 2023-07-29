'use client'

import { useApiDataFetch } from '@/hooks/useApiDataFetch'
import { QUOTE_API } from '@/utils/routes'
import style from './Quote.module.scss'

export interface IData {
    id: number
    quote: string
    author: string
}

const Quote = () => {
    const { quote, author } = useApiDataFetch<IData>(QUOTE_API)

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
