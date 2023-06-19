import H1 from '../../../../ui/H1/H1'
import H3 from '../../../../ui/H3/H3'
import style from './Headings.module.scss'

const Headings = () => {
    return (
        <div className={style.headings}>
            <H1 variant='primary'>#online_math</H1>
            <H3>endless practice problems 😊</H3>
        </div>
    )
}

export default Headings
