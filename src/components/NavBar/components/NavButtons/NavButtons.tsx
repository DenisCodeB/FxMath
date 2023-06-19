import Image from 'next/image'
import Button from '../../../../ui/Button/Button'
import CalculationSvg from '../../../../assets/images/Calculation.svg'
import style from './NavButtons.module.scss'

const NavButtons = () => {
    return (
        <div className={style['nav-buttons']}>
            <Button variant='secondary' text='Practice'>
                <Image src={CalculationSvg} alt='' />
            </Button>
        </div>
    )
}

export default NavButtons
