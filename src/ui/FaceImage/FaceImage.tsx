import Image, { StaticImageData } from 'next/image'
import c from 'classnames'
import { classType } from '@/components/WelcomeBlock/components/FaceImages/helpers/classType'
import style from './FaceImage.module.scss'

interface IFaceImage {
    url: StaticImageData
    className: classType
}

const FaceImage = ({ url, className }: IFaceImage) => {
    return (
        <Image
            className={c(style['face-img'], style[className])}
            src={url}
            alt=''
            priority={true}
        />
    )
}

export default FaceImage
