import { Metadata } from 'next'
import PageContent from '@/modules/PageContent'
import { NOT_FOUND_PAGE_CONTENT } from '@/utils/pageContent'

export const metadata: Metadata = {
    title: 'FxMath - Not Found ;/',
}

const NotFoundPage = () => {
    return <PageContent {...NOT_FOUND_PAGE_CONTENT} />
}

export default NotFoundPage
