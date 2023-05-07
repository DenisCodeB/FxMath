import { HTMLProps } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

interface IFaceImage extends HTMLProps<HTMLDivElement> {
    url: string
    variantStyle: FlattenSimpleInterpolation
}

const StyledFaceImage = styled.div<IFaceImage>`
    background-image: url(${({ url }) => url});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    ${({ variantStyle }) => variantStyle}
`

const FaceImage = ({ url, ref, as, ...props }: IFaceImage) => {
    return <StyledFaceImage url={url} {...props} />
}

export default FaceImage
