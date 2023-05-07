import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { navItemsStyle } from './styles'

interface IListItem {
    text: string
    className: string
    path: string
}

const StyledListItem = styled.li<Partial<IListItem>>`
    ${({ className }) => className === 'nav-items' && navItemsStyle}
`

const ListItem = ({ text, className, path }: IListItem) => {
    return (
        <StyledListItem className={className}>
            <Link to={path}>{text}</Link>
        </StyledListItem>
    )
}

export default ListItem
