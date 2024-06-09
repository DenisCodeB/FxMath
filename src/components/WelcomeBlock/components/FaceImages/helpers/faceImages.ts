import { StaticImageData } from 'next/image'
import Image1 from '../../../../../../public/assets/images/Image1.png'
import Image2 from '../../../../../../public/assets/images/Image2.png'
import Image3 from '../../../../../../public/assets/images/Image3.png'
import Image4 from '../../../../../../public/assets/images/Image4.png'
import { classType } from './classType'

const images = new Map<classType, StaticImageData>([
    ['first-img', Image1],
    ['second-img', Image2],
    ['third-img', Image3],
    ['fourth-img', Image4],
])

export { images }
