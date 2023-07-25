import FaceImages from './components/FaceImages/FaceImages'
import ScrollDown from './components/ScrollDown/ScrollDown'
import BackRounds from './components/BackRounds/BackRounds'
import Title from './components/Title/Title'
import style from './WelcomeBlock.module.scss'

const WelcomeBlock = () => {
    return (
        <section className={style['welcome-block']}>
            <div className={style['welcome-block__title-wrapper']}>
                <Title />
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
