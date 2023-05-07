import { FlattenSimpleInterpolation } from 'styled-components'
import Image1 from '../../../../../assets/images/Image1.png'
import Image2 from '../../../../../assets/images/Image2.png'
import Image3 from '../../../../../assets/images/Image3.png'
import Image4 from '../../../../../assets/images/Image4.png'
import { firstImage, fourthImage, secondImage, thirdImage } from '../../../../../ui/FaceImage/styles/imageSyles'

const images = new Map<FlattenSimpleInterpolation, string>([
    [firstImage, Image1],
    [secondImage, Image2],
    [thirdImage, Image3],
    [fourthImage, Image4],
])

export {
    images
}