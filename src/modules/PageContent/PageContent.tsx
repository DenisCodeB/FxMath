import ContentBlock from '@/components/ContentBlock/ContentBlock'
import Heading from '@/ui/Heading/Heading'
import { IPageContent } from '@/utils/pageContent'
import style from './PageContent.module.scss'

const PageContent = ({ title, text, img }: IPageContent) => {
    return (
        <section className={style['content-wrapper']}>
            <Heading role={'h2'} className={style['content-wrapper__title']}>
                {title}
            </Heading>
            <ContentBlock text={text} img={img} />
        </section>
    )
}

export default PageContent
