'use client'

import { useEffect, useRef } from 'react'
import c from 'classnames'
import Image, { StaticImageData } from 'next/image'
import { classType } from '@/components/WelcomeBlock/components/FaceImages/helpers/classType'
import { animateMouseMove, removeListeners } from './utils/animateMouseMove'
import style from './FaceImage.module.scss'

interface IFaceImage {
    url: StaticImageData
    className: classType
    animate: string
}

const FaceImage = ({ url, className, animate }: IFaceImage) => {
    const ref = useRef<HTMLImageElement>(null)
    useEffect(() => {
        const elem = ref.current as HTMLImageElement
        animateMouseMove(elem)

        return () => {
            removeListeners(elem)
        }
    }, [])

    return (
        <Image
            ref={ref}
            className={c(style['face-img'], style[className], animate)}
            src={url}
            alt=''
            priority={true}
        />
    )
}

export default FaceImage
