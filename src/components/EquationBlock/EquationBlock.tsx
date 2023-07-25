import Image from 'next/image'
import LongArrowLeft from '@/assets/images/LongArrowLeft.svg'
import LongArrowRight from '@/assets/images/LongArrowRight.svg'
import Button from '@/ui/Button/Button'
import style from './EquationBlock.module.scss'
import Equation from './components/Equation/Equation'

const EquationBlock = () => {
    return (
        <div className={style['equation-wrapper']}>
            <div className={style.equation}>
                <Button variant='styleless'>
                    <Image src={LongArrowLeft} alt='' />
                </Button>
                <Equation />
                <Button variant='styleless'>
                    <Image src={LongArrowRight} alt='' />
                </Button>
            </div>
            <Button variant='styleless' text='Check' />
        </div>
    )
}

export default EquationBlock
