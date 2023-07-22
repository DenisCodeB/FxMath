import { IPageContent } from '@/utils/pageContent'
import ContentBlock from '@/components/ContentBlock/ContentBlock'
import H2 from '@/ui/H2/H2'
import style from './PageContent.module.scss'

const PageContent = ({ title, text, img }: IPageContent) => {
    return (
        <div className={style['content-wrapper']}>
            <H2 className={style['content-wrapper__title']}>{title}</H2>
            <ContentBlock text={text} img={img} />
        </div>
    )
}

export default PageContent
