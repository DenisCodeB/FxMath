import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../../modules/PageWrapper/PageWrapper'
import Button from '../../ui/Button/Button'
import HomeContent from '../../modules/HomeContent/HomeContent'

const StyledHome = styled.main`
    width: 100%;
    margin-top: 4rem;
`

export const Home = () => {
    return (
        <StyledHome id='main'>
            <PageWrapper>
                <HomeContent />
            </PageWrapper>
        </StyledHome>
    )
}
