import styled from 'styled-components'

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
`

export const Header = () => {
    return (
        <StyledHeader>
            <div>Header</div>
        </StyledHeader>
    )
}
