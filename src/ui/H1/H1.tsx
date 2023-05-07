import styled from 'styled-components'

interface IH1 {
    children: string
    variant: 'primary' | 'secondary'
}

const StyledH1 = styled.h1`
    font-size: var(--fs-70);
    font-family: var(--ff-M-b);
    font-weight: bold;
    color: var(--first-text-color);
`

const H1 = ({ children }: IH1) => {
    return <StyledH1>{children}</StyledH1>
}

export default H1
