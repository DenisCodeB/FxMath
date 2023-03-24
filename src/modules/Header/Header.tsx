import { ReactNode, HTMLProps } from 'react'
import styled from 'styled-components'
import NavBar from '../../components/NavBar/NavBar'
import Button from '../../ui/Button/Button'
import Logo from '../../ui/Logo/Logo'
import PageWrapper from '../PageWrapper/PageWrapper'

const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    height: 5rem;
    top: 0;
    left: 0;
    background-color: var(--transparent);
`

const HeaderContent = styled.div`
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Header = () => {
    return (
        <StyledHeader id="header">
            <PageWrapper>
                <HeaderContent>
                    <Logo />
                    <NavBar />
                </HeaderContent>
            </PageWrapper>
        </StyledHeader>
    )
}
