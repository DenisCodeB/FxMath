import Image from 'next/image'
import { quotes } from '../../../../utils/quotes'
import Trophy from '../../../../assets/images/Trophy.png'
import style from './Quote.module.scss'

const Quote = () => {
    return (
        <div className={style.quote}>
            <div>
                <div className={style.quote__text}>{quotes[0].quote}</div>
                <div className={style.quote__author}>{quotes[0].author}</div>
            </div>
            <Image className={style.quote__image} src={Trophy} alt='' />
        </div>
    )
}

export default Quote
