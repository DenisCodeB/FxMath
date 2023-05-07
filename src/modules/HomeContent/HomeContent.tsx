import styled from 'styled-components'
import QuoteBlock from '../../components/QuoteBlock/QuoteBlock'
import StepsBlock from '../../components/StepsBlock/StepsBlock'
import WelcomeBlock from '../../components/WelcomeBlock/WelcomeBlock'

const StyledHomeContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 10rem;
`

const HomeContent = () => {
    return (
        <StyledHomeContent>
            <WelcomeBlock />
            <QuoteBlock />
            <StepsBlock />
        </StyledHomeContent>
    )
}

export default HomeContent
