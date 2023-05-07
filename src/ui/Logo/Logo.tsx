import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Svg } from '../../assets/images/Logo.svg'
import { flexCentralize } from '../../styles/templates'
import { HOME_ROUTE } from '../../utils/routes'

const StyledLogo = styled.div`
    ${flexCentralize}
    text-decoration: none;
    inset: 100%;
`

const LogoLink = styled(Link)`
    width: 100%;
    padding: 0 0.5rem;
`

const LogoSvg = styled(Svg)`
    display: inline-block;
    width: 6rem;
`

const Logo = () => {
    return (
        <StyledLogo>
            <LogoLink to={HOME_ROUTE}>
                <LogoSvg />
            </LogoLink>
        </StyledLogo>
    )
}

export default Logo
