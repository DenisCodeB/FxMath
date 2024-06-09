'use client'

import { Suspense, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Quote from '@/ui/Quote/Quote'
import HashHeading from '../../../../ui/HashHeading/HashHeading'
import style from './QuoteBlock.module.scss'

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
                <Suspense fallback={<p>Loading...</p>}>
                    <Quote />
                </Suspense>
            </div>
        </div>
    )
}

export default QuoteBlock
