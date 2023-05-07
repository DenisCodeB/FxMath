import { ReactNode } from 'react'
import styled from 'styled-components'

interface IPageWrapper {
    children: ReactNode
}

const StyledPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1280px;
    border: var(--border-dev);
    margin: 0 auto;
`

const PageWrapper = ({ children }: IPageWrapper) => {
    return (
        <StyledPageWrapper className='page-wrapper'>
            {children}
        </StyledPageWrapper>
    )
}

export default PageWrapper
