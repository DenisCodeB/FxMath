import styled, { css } from 'styled-components'
import { backgroundDefault } from '../../../../styles/templates'
import { IStepInfo } from './Step'

interface IStepID {
    ind: number
}

type StepImg = Pick<IStepInfo, 'img'>

const StyledStep = styled.div<IStepID>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    ${({ ind }) => (ind - 1) % 2 !== 0 && css`
        flex-direction: row-reverse;
    `}
`

const TextBlock = styled.div`
    width: 45%;
`

const HashWrap = styled.div``

const TextWrap = styled.div`
    margin-top: 2rem;
    width: 90%;
`

const Action = styled.p`
    font-family: var(--ff-M);
    font-size: var(--fs-40);
    color: var(--second-text-color);
    text-align: justify;
`

const Example = styled.p`
    margin-top: 1rem;
    font-family: var(--ff-L);
    font-size: var(--fs-18);
    text-align: right;
    color: var(--third-text-color);
`

const Image = styled.div<StepImg>`
    background-image: url(${({ img }) => img});
    ${backgroundDefault}
    width: 50%;
    aspect-ratio: 1.5 / 1;
    mix-blend-mode: multiply;
`

export {
    StyledStep,
    TextBlock,
    HashWrap,
    TextWrap,
    Action,
    Example,
    Image,
}