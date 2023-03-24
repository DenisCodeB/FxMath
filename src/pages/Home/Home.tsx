import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../../modules/PageWrapper/PageWrapper'
import Button from '../../ui/Button/Button'

const StyledHome = styled.main`
    width: 100%;
    margin-top: 5rem;
`

export const Home = () => {
    return (
        <StyledHome id="main">
            <PageWrapper>
                <h1>Home</h1>
            </PageWrapper>
        </StyledHome>
    )
}
