import Image from 'next/image'
import DoubleArrow from '../../../../assets/images/DoubleArrow.svg'
import style from './ScrollDown.module.scss'
import Link from 'next/link'

const ScrollDown = () => {
    return (
        <Link href={'#explore'} className={style['welcome-block__scroll-down']}>
            <span>Scroll to see more</span>
            <Image src={DoubleArrow} alt='' />
        </Link>
    )
}

export default ScrollDown
