'use client'

import { useInView } from 'react-intersection-observer'
import HashHeading from '../../../../ui/HashHeading/HashHeading'
import Quote from '@/ui/Quote/Quote'
import style from './QuoteBlock.module.scss'
import { useEffect } from 'react'

const QuoteBlock = () => {
    const [vRef, inView] = useInView({
        threshold: 0.5,
    })

    useEffect(() => {
        const elem = document.getElementById('quote-block')
        inView && elem?.classList.add(style['quote-block_show'])
    })

    return (
        <div id='quote-block' ref={vRef} className={style['quote-block']}>
            <div className={style['quote-block__header']}>
                <HashHeading>#quote</HashHeading>
            </div>
            <div className={style['quote-block__body']}>
                <Quote />
            </div>
        </div>
    )
}

export default QuoteBlock
