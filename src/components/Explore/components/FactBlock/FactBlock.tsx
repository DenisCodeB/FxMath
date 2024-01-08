'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Fact from '@/ui/Fact/Fact'
import style from './FactBlock.module.scss'
import HashHeading from '@/ui/HashHeading/HashHeading'

const FactBlock = () => {
    const [vRef, inView] = useInView({
        threshold: 0.5,
    })

    useEffect(() => {
        const elem = document.getElementById('fact-block')
        inView && elem?.classList.add(style['fact-block_show'])
    })

    return (
        <div id='fact-block' ref={vRef} className={style['fact-block']}>
            <div className={style['fact-block__header']}>
                <HashHeading>#fact</HashHeading>
            </div>
            <div className={style['fact-block__body']}>
                <Fact />
            </div>
        </div>
    )
}

export default FactBlock
