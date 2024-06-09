import Image from 'next/image'
import Link from 'next/link'
import Svg from '../../../public/assets/images/Logo.svg'
import { HOME_ROUTE } from '../../utils/routes'
import style from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={style.logo}>
            <Link href={HOME_ROUTE} className={style.logo__link}>
                <Image
                    priority
                    src={Svg}
                    alt='Logo'
                    className={style.logo__img}
                />
            </Link>
        </div>
    )
}

export default Logo
