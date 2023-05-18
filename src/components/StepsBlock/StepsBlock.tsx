import styled from 'styled-components'
import Button from '../../ui/Button/Button'
import { ReactComponent as ArrowRightTwo } from '../../assets/images/ArrowRight2.svg'
import Steps from './children/Steps/Steps'
import { flexCentralize } from '../../styles/templates'

const StyledStepsBlock = styled.div`
    width: 100%;
`

const Title = styled.h2`
    font-family: var(--ff-M-b);
    font-size: var(--fs-50);
    color: var(--second-text-color);
`

const GetStarted = styled.div`
    ${flexCentralize}
    margin-top: 15rem;
    flex-direction: column;
    gap: 2rem;
`

const OpeningText = styled.p`
    color: var(--second-text-color);
    font-family: var(--ff-L);
    font-size: var(--fs-20);
`

const StepsBlock = () => {
    return (
        <StyledStepsBlock>
            <Title>How to get started?</Title>
            <Steps />
            <GetStarted>
                <OpeningText>To begin our adventure,</OpeningText>
                <Button variant='primary' className='big' text='Get Started'>
                    <ArrowRightTwo />
                </Button>
            </GetStarted>
        </StyledStepsBlock>
    )
}

export default StepsBlock
