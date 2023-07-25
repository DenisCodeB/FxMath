import Explore from '@/components/Explore/Explore'
import StepsBlock from '../../components/StepsBlock/StepsBlock'
import WelcomeBlock from '../../components/WelcomeBlock/WelcomeBlock'
import style from './HomeContent.module.scss'

const HomeContent = () => {
    return (
        <div className={style['home-content']}>
            <WelcomeBlock />
            <Explore />
            <StepsBlock />
        </div>
    )
}

export default HomeContent
