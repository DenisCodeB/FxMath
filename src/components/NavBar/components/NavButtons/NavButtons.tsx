import Image from 'next/image'
import ButtonLink from '@/ui/Button/ButtonLink'
import { PLAYGROUND_ROUTE } from '@/utils/routes'
import CalculationSvg from '../../../../../public/assets/images/Calculation.svg'
import style from './NavButtons.module.scss'

const NavButtons = () => {
    return (
        <div className={style['nav-buttons']}>
            <ButtonLink
                href={PLAYGROUND_ROUTE}
                variant='secondary'
                text='Playground'
            >
                <Image src={CalculationSvg} alt='' />
            </ButtonLink>
        </div>
    )
}

export default NavButtons
