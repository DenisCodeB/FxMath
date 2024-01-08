import { CONTACTS_PAGE_CONTENT } from '@/utils/pageContent'
import PageContent from '@/modules/PageContent/PageContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FxMath - Contacts',
}

const ContactsPage = () => {
    return <PageContent {...CONTACTS_PAGE_CONTENT} />
}

export default ContactsPage
