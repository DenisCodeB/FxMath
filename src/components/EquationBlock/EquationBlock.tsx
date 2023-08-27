'use client'

import Image from 'next/image'
import LongArrowLeft from '@/assets/images/LongArrowLeft.svg'
import LongArrowRight from '@/assets/images/LongArrowRight.svg'
import Button from '@/ui/Button/Button'
import Equation from './components/Equation/Equation'
import style from './EquationBlock.module.scss'
import Answer from './components/Answer/Answer'
import { useSwitchToNextEquation } from './hooks/useSwitchToNextEquation'
import { useSwitchToPreviousEquation } from './hooks/useSwitchToPreviousEquation'

const EquationBlock = () => {
    const switchToNextEquation = useSwitchToNextEquation()
    const switchToPreviousEquation = useSwitchToPreviousEquation()

    return (
        <div className={style['equation-wrapper']}>
            <div className={style.equation}>
                <Button
                    className={style['equation__switch-btn']}
                    variant='styleless'
                    onClick={switchToPreviousEquation}
                >
                    <Image src={LongArrowLeft} alt='' />
                </Button>
                <Equation />
                <Button
                    className={style['equation__switch-btn']}
                    variant='styleless'
                    onClick={switchToNextEquation}
                >
                    <Image src={LongArrowRight} alt='' />
                </Button>
            </div>
            <Answer />
        </div>
    )
}

export default EquationBlock
