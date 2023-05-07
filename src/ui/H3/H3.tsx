import styled from 'styled-components'

interface IH3 {
    children: string
}

const StyledH3 = styled.h3`
    font-size: var(--fs-25);
    font-family: var(--ff-L);
    font-weight: normal;
    color: var(--second-text-color);
`

const H3 = ({ children }: IH3) => {
    return <StyledH3>{children}</StyledH3>
}

export default H3
