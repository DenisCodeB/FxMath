import Image from 'next/image'
import Link from 'next/link'
import DoubleArrow from '../../../../../public/assets/images/DoubleArrow.svg'
import style from './ScrollDown.module.scss'

const ScrollDown = () => {
    return (
        <Link href={'#explore'} className={style['welcome-block__scroll-down']}>
            <span>Scroll to see more</span>
            <Image src={DoubleArrow} alt='' />
        </Link>
    )
}

export default ScrollDown
