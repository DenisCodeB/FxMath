import styled from 'styled-components'
import PageWrapper from '../PageWrapper/PageWrapper'

const StyledFooter = styled.footer`
    width: 100%;
    height: 3rem;
`

const Footer = () => {
    return (
        <StyledFooter id="footer">
            <PageWrapper>
                <div>Footer</div>
            </PageWrapper>
        </StyledFooter>
    )
}

export default Footer