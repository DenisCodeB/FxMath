import styled from 'styled-components'
import PageWrapper from '../PageWrapper/PageWrapper'

const StyledFooter = styled.footer`
    width: 100%;
    height: 3rem;
`

export const Footer = () => {
    return (
        <StyledFooter id="footer">
            <PageWrapper>
                <div>Footer</div>
            </PageWrapper>
        </StyledFooter>
    )
}
