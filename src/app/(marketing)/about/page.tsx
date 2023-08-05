import { ABOUT_PAGE_CONTENT } from '@/utils/pageContent'
import PageContent from '@/modules/PageContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FxMath - About us',
}

const AboutPage = () => {
    return <PageContent {...ABOUT_PAGE_CONTENT} />
}

export default AboutPage
