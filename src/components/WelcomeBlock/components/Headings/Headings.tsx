import Heading from '@/ui/Heading/Heading'
import style from './Headings.module.scss'

const Headings = () => {
    return (
        <div className={style.headings}>
            <Heading role='h1' className={style['headings__main-heading']}>
                #online_math
            </Heading>
            <p className={style.headings__describe}>
                endless practice problems 😊
            </p>
        </div>
    )
}

export default Headings
