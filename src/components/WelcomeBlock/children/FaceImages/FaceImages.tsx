import styled from 'styled-components'
import FaceImage from '../../../../ui/FaceImage/FaceImage'
import { images } from './helpers/faceImages'

const StyledFaceImages = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    aspect-ratio: 1 / 1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
`

const FaceImages = () => {
    return (
        <StyledFaceImages>
            {[...images].map((img, i) => (
                <FaceImage key={i} variantStyle={img[0]} url={img[1]} />
            ))}
        </StyledFaceImages>
    )
}

export default FaceImages
