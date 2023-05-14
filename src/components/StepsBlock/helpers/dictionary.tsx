import styled, { css } from 'styled-components'
import Step1 from '../../../assets/images/Step1.png'
import Step2 from '../../../assets/images/Step2.png'
import Step3 from '../../../assets/images/Step3.png'
import { IStepInfo } from '../children/Step/Step'

type StepsArray = Array<IStepInfo>

interface IStyledBold {
    variant: 'spec-1' | 'spec-2' | 'spec-3'
}

const StyledBold = styled.span<IStyledBold>`
    font-family: var(--ff-M-b);
    font-weight: bold;

    ${({ variant }) => {
        switch (true) {
            case variant === 'spec-1':
                return css`
                    color: var(--spec-1-text-color);
                `
            case variant === 'spec-2':
                return css`
                    color: var(--spec-2-text-color);
                `
            case variant === 'spec-3':
                return css`
                    color: var(--spec-3-text-color);
                `
        }
    }}
`

const stepsConf: StepsArray = [
    {
        id: 1,
        title: (
            <>
                Choose your available now{' '}
                <StyledBold variant='spec-1'>task mode</StyledBold>
            </>
        ),
        ex: 'For example: Equations',
        img: Step1,
    },
    {
        id: 2,
        title: (
            <>
                <StyledBold variant='spec-2'>Set up</StyledBold> your task mode
                as you need
            </>
        ),
        ex: 'For example: Linear equations',
        img: Step2,
    },
    {
        id: 3,
        title: (
            <>
                Start to practice and{' '}
                <StyledBold variant='spec-3'>just progress</StyledBold> with us!
            </>
        ),
        ex: "Really, that's all",
        img: Step3,
    },
]

export { stepsConf }
