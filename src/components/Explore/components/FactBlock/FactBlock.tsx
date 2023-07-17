import Fact from '@/ui/Fact/Fact'
import style from './FactBlock.module.scss'
import HashHeading from '@/ui/HashHeading/HashHeading'
import { Suspense } from 'react'

const FactBlock = () => {
    return (
        <div className={style['fact-block']}>
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
