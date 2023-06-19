import QuoteBlock from '../../components/QuoteBlock/QuoteBlock'
import StepsBlock from '../../components/StepsBlock/StepsBlock'
import WelcomeBlock from '../../components/WelcomeBlock/WelcomeBlock'
import style from './HomeContent.module.scss'

const HomeContent = () => {
    return (
        <div className={style['home-content']}>
            <WelcomeBlock />
            <QuoteBlock />
            <StepsBlock />
        </div>
    )
}

export default HomeContent
