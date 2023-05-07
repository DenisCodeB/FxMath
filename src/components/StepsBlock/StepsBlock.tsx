import styled from 'styled-components'
import Button from '../../ui/Button/Button'
import Step from './children/Step/Step'
import { ReactComponent as ArrowRightTwo } from '../../assets/images/ArrowRight2.svg'

const StyledStepsBlock = styled.div``

const GetStartedWrap = styled.div``

const StepsBlock = () => {
    return (
        <StyledStepsBlock>
            {[1, 2, 3].map((elem, i) => (
                <Step key={i} />
            ))}
            <GetStartedWrap>
                <Button variant='primary' text='Get Started'>
                    <ArrowRightTwo />
                </Button>
            </GetStartedWrap>
        </StyledStepsBlock>
    )
}

export default StepsBlock
