import Heading from '@/ui/Heading/Heading'
import FactBlock from './components/FactBlock/FactBlock'
import QuoteBlock from './components/QuoteBlock/QuoteBlock'
import style from './Explore.module.scss'

const Explore = () => {
    return (
        <section id='explore' className={style['explore-wrap']}>
            <Heading role='h2' className={style['sub-heading']}>
                🗽 Explore
            </Heading>
            <div className={style.explore}>
                <QuoteBlock />
                <FactBlock />
            </div>
        </section>
    )
}

export default Explore
