'use client'

import Image from 'next/image'
import { useSwitchToNextEquation } from './hooks/useSwitchToNextEquation'
import { useSwitchToPreviousEquation } from './hooks/useSwitchToPreviousEquation'
import Button from '@/ui/Button/Button'
import LongArrowLeft from '../../../public/assets/images/LongArrowLeft.svg'
import LongArrowRight from '../../../public/assets/images/LongArrowRight.svg'
import Answer from './components/Answer/Answer'
import Equation from './components/Equation/Equation'
import style from './EquationBlock.module.scss'

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
