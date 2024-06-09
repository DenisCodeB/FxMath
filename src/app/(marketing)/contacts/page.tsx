import { Metadata } from 'next'
import PageContent from '@/modules/PageContent/PageContent'
import { CONTACTS_PAGE_CONTENT } from '@/utils/pageContent'

export const metadata: Metadata = {
    title: 'FxMath - Contacts',
}

const ContactsPage = () => {
    return <PageContent {...CONTACTS_PAGE_CONTENT} />
}

export default ContactsPage
