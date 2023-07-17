import QuoteBlock from './components/QuoteBlock/QuoteBlock'
import style from './Explore.module.scss'
import FactBlock from './components/FactBlock/FactBlock'
import H2 from '@/ui/H2/H2'

const Explore = () => {
    return (
        <div tabIndex={-1} id='explore' className={style['explore-wrap']}>
            <H2 className={style['sub-heading']}>⚡Explore</H2>
            <div className={style.explore}>
                <QuoteBlock />
                <FactBlock />
            </div>
        </div>
    )
}

export default Explore
