import Link from 'next/link'
import Image from 'next/image'
import Svg from '../../assets/images/Logo.svg'
import { HOME_ROUTE } from '../../utils/routes'
import style from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={style.logo}>
            <Link href={HOME_ROUTE} className={style.logo__link}>
                <Image src={Svg} alt='Logo' className={style.logo__img} />
            </Link>
        </div>
    )
}

export default Logo
