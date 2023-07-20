import Image from 'next/image'
import Button from '../../ui/Button/Button'
import ArrowRightTwo from '../../assets/images/ArrowRight2.svg'
import Headings from './components/Headings/Headings'
import FaceImages from './components/FaceImages/FaceImages'
import ScrollDown from './components/ScrollDown/ScrollDown'
import BackRounds from './components/BackRounds/BackRounds'
import style from './WelcomeBlock.module.scss'

const WelcomeBlock = () => {
    return (
        <section className={style['welcome-block']}>
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
                <BackRounds />
            </div>
            <ScrollDown />
        </section>
    )
}

export default WelcomeBlock
