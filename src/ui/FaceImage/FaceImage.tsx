import { HTMLProps } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { backgroundDefault } from '../../styles/templates'

interface IFaceImage extends HTMLProps<HTMLDivElement> {
    url: string
    variantStyle: FlattenSimpleInterpolation
}

const StyledFaceImage = styled.div<IFaceImage>`
    background-image: url(${({ url }) => url});
    ${backgroundDefault}
    ${({ variantStyle }) => variantStyle}
`

const FaceImage = ({ url, ref, as, ...props }: IFaceImage) => {
    return <StyledFaceImage url={url} {...props} />
}

export default FaceImage
