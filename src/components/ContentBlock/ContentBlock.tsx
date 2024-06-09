import FaceImage from '@/ui/FaceImage/FaceImage'
import { IPageContent } from '@/utils/pageContent'
import style from './ContentBlock.module.scss'

type ContentBlock = Omit<IPageContent, 'title'>

const ContentBlock = ({ text, img }: ContentBlock) => {
    return (
        <div className={style.content}>
            <p className={style.content__text}>{text}</p>
            <div className={style['content__img-wrap']}>
                <FaceImage url={img} className='second-img' />
            </div>
        </div>
    )
}

export default ContentBlock
