import FaceImage from '../../../../ui/FaceImage/FaceImage'
import { images } from './helpers/faceImages'
import style from './FaceImages.module.scss'

const FaceImages = () => {
    return (
        <div className={style['face-images']}>
            {[...images].map((img, i) => (
                <FaceImage key={i} className={img[0]} url={img[1]} />
            ))}
        </div>
    )
}

export default FaceImages
