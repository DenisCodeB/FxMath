import HashHeading from '../../ui/HashHeading/HashHeading'
import Quote from './components/Quote/Quote'
import style from './QuoteBlock.module.scss'

const QuoteBlock = () => {
    return (
        <div className={style['quote-block-wrapper']}>
            <div className={style['quote-block']}>
                <div className={style['quote-block__header']}>
                    <HashHeading>#quote</HashHeading>
                </div>
                <div className={style['quote-block__body']}>
                    <Quote />
                </div>
            </div>
        </div>
    )
}

export default QuoteBlock
