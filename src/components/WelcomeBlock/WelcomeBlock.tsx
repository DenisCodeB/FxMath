import Image from 'next/image'
import Button from '../../ui/Button/Button'
import ArrowRightTwo from '../../assets/images/ArrowRight2.svg'
import Headings from './components/Headings/Headings'
import FaceImages from './components/FaceImages/FaceImages'
import style from './WelcomeBlock.module.scss'
import ScrollDown from './components/ScrollDown/ScrollDown'

const WelcomeBlock = () => {
    return (
        <div className={style['welcome-block']}>
            <div className={style['welcome-block__title-wrapper']}>
                <div className={style['welcome-block__title']}>
                    <Headings />
                    <Button variant='primary' text='More'>
                        <Image src={ArrowRightTwo} alt='' />
                    </Button>
                </div>
            </div>
            <div className={style['welcome-block__images']}>
                <FaceImages />
            </div>
            <ScrollDown />
        </div>
    )
}

export default WelcomeBlock
