'use client'
import { useInView } from 'react-intersection-observer'
import Steps from './components/Steps/Steps'
import GetStarted from './components/GetStarted/GetStarted'
import H2 from '@/ui/H2/H2'
import style from './StepsBlock.module.scss'

const StepsBlock = () => {
    // const [ref, inView, enrty] = useInView({
    //     threshold: 0.2,
    // })

    // useEffect(() => {
    //     if (inView) {
    //         document.body.classList.add(style['bg-1'])
    //     } else {
    //         document.body.classList.remove(style['bg-1'])
    //     }
    // })

    return (
        <div className={style['steps-block']}>
            <H2 className={style['steps-block__title']}>🍵 Get started</H2>
            <Steps />
            <GetStarted />
        </div>
    )
}

export default StepsBlock
