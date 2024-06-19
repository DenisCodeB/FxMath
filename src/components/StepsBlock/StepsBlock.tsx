'use client'
import Heading from '@/ui/Heading/Heading'
import GetStarted from './components/GetStarted/GetStarted'
import Steps from './components/Steps/Steps'
import style from './StepsBlock.module.scss'

const StepsBlock = () => {
    return (
        <section className={style['steps-block']}>
            <Heading
                role='h2'
                id='get-started'
                className={style['steps-block__title']}
            >
                ☕ Get started
            </Heading>
            <Steps />
            <GetStarted />
        </section>
    )
}

export default StepsBlock
