import HashHeading from '../../../../ui/HashHeading/HashHeading'
import Quote from '@/ui/Quote/Quote'
import style from './QuoteBlock.module.scss'

const QuoteBlock = () => {
    return (
        <div className={style['quote-block']}>
            <div className={style['quote-block__header']}>
                <HashHeading>#quote</HashHeading>
            </div>
            <div className={style['quote-block__body']}>
                <Quote />
            </div>
        </div>
    )
}

export default QuoteBlock
