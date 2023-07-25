'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import c from 'classnames'
import HashHeading from '../../../../ui/HashHeading/HashHeading'
import { IStepInfo } from '../types/types'
import style from './Step.module.scss'

const Step = ({ id, bg, title, ex, img }: IStepInfo) => {
    const [ref1, inView1] = useInView({
        threshold: 0.3,
        // triggerOnce: true,
    })

    useEffect(() => {
        inView1
            ? document.body.classList.add(style[`step_bg-${id}`])
            : document.body.classList.remove(style[`step_bg-${id}`])
    })

    return (
        <div
            ref={ref1}
            className={c(
                style.step,
                {
                    [style.step_reversed]: id % 2 === 0,
                },
                { [style.step_hidden]: !inView1 }
            )}
        >
            <div className={style.step__body}>
                <div>
                    <HashHeading>#{id}</HashHeading>
                </div>
                <div className={style.text}>
                    <Image
                        priority
                        className={style.text__bg}
                        src={bg}
                        alt=''
                    />
                    <p className={style.text__action}>{title}</p>
                    <p className={style.text__example}>{ex}</p>
                </div>
            </div>
            <div
                className={c(style.step__image, style[`step__image_${id}`])}
            ></div>
        </div>
    )
}

export default Step
