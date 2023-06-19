'use client'

import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import c from 'classnames'
import HashHeading from '../../../../ui/HashHeading/HashHeading'
import { IStepInfo } from '../types/types'
import style from './Step.module.scss'

const Step = ({ id, title, ex, img }: IStepInfo) => {
    const [ref, inView, enrty] = useInView({
        threshold: 0.7,
        triggerOnce: true,
    })

    return (
        <div
            ref={ref}
            className={c(
                style.step,
                {
                    [style.step_reversed]: id % 2 === 0,
                },
                { [style.step_hidden]: !inView }
            )}
        >
            <div className={style.step__body}>
                <div>
                    <HashHeading>#{id}</HashHeading>
                </div>
                <div className={style.text}>
                    <p className={style.text__action}>{title}</p>
                    <p className={style.text__example}>{ex}</p>
                </div>
            </div>
            <Image className={style.step__image} src={img} alt='' />
        </div>
    )
}

export default Step
