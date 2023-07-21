'use client'
import { useInView } from 'react-intersection-observer'
import Steps from './components/Steps/Steps'
import GetStarted from './components/GetStarted/GetStarted'
import H2 from '@/ui/H2/H2'
import style from './StepsBlock.module.scss'

const StepsBlock = () => {
    return (
        <section className={style['steps-block']}>
            <H2 id='get-started' className={style['steps-block__title']}>
                🍵 Get started
            </H2>
            <Steps />
            <GetStarted />
        </section>
    )
}

export default StepsBlock
