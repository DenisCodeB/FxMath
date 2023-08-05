'use client'

import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef } from 'react'
import c from 'classnames'
import { classType } from '@/components/WelcomeBlock/components/FaceImages/helpers/classType'
import style from './FaceImage.module.scss'
import { animateMouseMove, removeListeners } from './utils/animateMouseMove'

interface IFaceImage {
    url: StaticImageData
    className: classType
}

const FaceImage = ({ url, className }: IFaceImage) => {
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
            className={c(style['face-img'], style[className])}
            src={url}
            alt=''
            priority={true}
        />
    )
}

export default FaceImage
