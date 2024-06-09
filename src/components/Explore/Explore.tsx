import H2 from '@/ui/H2/H2'
import FactBlock from './components/FactBlock/FactBlock'
import QuoteBlock from './components/QuoteBlock/QuoteBlock'
import style from './Explore.module.scss'

const Explore = () => {
    return (
        <section id='explore' className={style['explore-wrap']}>
            <H2 className={style['sub-heading']}>⚡Explore</H2>
            <div className={style.explore}>
                <QuoteBlock />
                <FactBlock />
            </div>
        </section>
    )
}

export default Explore
