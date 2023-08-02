'use client'

import Image from 'next/image'
import LongArrowLeft from '@/assets/images/LongArrowLeft.svg'
import LongArrowRight from '@/assets/images/LongArrowRight.svg'
import Button from '@/ui/Button/Button'
import Equation from './components/Equation/Equation'
import style from './EquationBlock.module.scss'
import Answer from './components/Answer/Answer'
import { useAppDispatch } from '@/redux/hooks'
import { generateEquation } from '@/redux/features/equationSlice'
import { AnswerInput } from './components/Answer/utils/AnswerInput'

const EquationBlock = () => {
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(generateEquation())
        const input = new AnswerInput()
        input.clearInput()
    }

    return (
        <div className={style['equation-wrapper']}>
            <div className={style.equation}>
                <Button
                    className={style['equation__switch-btn']}
                    variant='styleless'
                >
                    <Image src={LongArrowLeft} alt='' />
                </Button>
                <Equation />
                <Button
                    className={style['equation__switch-btn']}
                    variant='styleless'
                    onClick={handleClick}
                >
                    <Image src={LongArrowRight} alt='' />
                </Button>
            </div>
            <Answer />
        </div>
    )
}

export default EquationBlock
