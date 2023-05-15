import styled from 'styled-components'
import PageWrapper from '../PageWrapper/PageWrapper'
import { flexCentralize } from '../../styles/templates'

const StyledFooter = styled.footer`
    width: 100%;
    height: 3rem;
    margin-top: 10rem;
`

const FooterContent = styled.div`
    ${flexCentralize}
    width: 100%;
    flex-direction: column;
    height: 100%;
`

const SourceText = styled.p`
    font-family: var(--ff-L);
    font-size: var(--fs-20);
    color: var(--second-text-color);
`

const YearText = styled.p`
    padding: 0.5rem;
    font-family: var(--ff-L);
    font-size: var(--fs-16);
    color: var(--third-text-color);
`

const Footer = () => {
    return (
        <StyledFooter id='footer'>
            <PageWrapper>
                <FooterContent>
                    <SourceText>Open source project</SourceText>
                    <YearText>2023 🧸</YearText>
                </FooterContent>
            </PageWrapper>
        </StyledFooter>
    )
}

export default Footer
