import { ReactNode } from 'react'
import styled from 'styled-components'

interface IHashHeading {
    children: ReactNode
}

const StyledHash = styled.span`
    font-size: var(--fs-20);
    font-family: var(--ff-M);
    color: var(--third-text-color);
`

const HashHeading = ({ children }: IHashHeading) => {
    return <StyledHash>{children}</StyledHash>
}

export default HashHeading
