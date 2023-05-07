import styled from 'styled-components'
import NavBar from '../../components/NavBar/NavBar'
import Logo from '../../ui/Logo/Logo'
import PageWrapper from '../PageWrapper/PageWrapper'

const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    height: 4rem;
    top: 0;
    left: 0;
    background-color: var(--main-background-color);
    z-index: 9999;
`

const HeaderContent = styled.div`
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Header = () => {
    return (
        <StyledHeader id='header'>
            <PageWrapper>
                <HeaderContent>
                    <Logo />
                    <NavBar />
                </HeaderContent>
            </PageWrapper>
        </StyledHeader>
    )
}

export default Header
