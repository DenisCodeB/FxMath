import { ReactNode } from 'react'
import HashHeading from '../../../../ui/HashHeading/HashHeading'
import {
    HashWrap,
    StyledStep,
    TextBlock,
    TextWrap,
    Action,
    Example,
    Image,
} from './styles'

export interface IStepInfo {
    id: number
    title: ReactNode
    ex: string
    img: string
}

const Step = ({ id, title, ex, img }: IStepInfo) => {
    return (
        <StyledStep ind={id}>
            <TextBlock>
                <HashWrap>
                    <HashHeading>#{id}</HashHeading>
                </HashWrap>
                <TextWrap>
                    <Action>{title}</Action>
                    <Example>{ex}</Example>
                </TextWrap>
            </TextBlock>
            <Image img={img} />
        </StyledStep>
    )
}

export default Step
