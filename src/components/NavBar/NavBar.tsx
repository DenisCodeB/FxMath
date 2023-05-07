import styled from 'styled-components'
import { navLinks } from './helpers/navLinks'
import ListItem from '../../ui/ListItem/ListItem'
import NavButtons from './components/NavButtons/NavButtons'
import { flexCentralize } from '../../styles/templates'

const NavWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
`

const StyledNavBar = styled.nav`
    width: 80%;
    ${flexCentralize}
`

const NavBarUl = styled.ul`
    width: 100%;
    display: flex;
    list-style: none;
    overflow: hidden;
    ${flexCentralize}
    gap: 20%;
`

const NavBar = () => {
    return (
        <NavWrap>
            <StyledNavBar>
                <NavBarUl>
                    {[...navLinks].map((item, ind) => {
                        return (
                            <ListItem
                                key={ind}
                                text={item[0]}
                                className="nav-items"
                                path={item[1]}
                            />
                        )
                    })}
                </NavBarUl>
            </StyledNavBar>
            <NavButtons />
        </NavWrap>
    )
}

export default NavBar
