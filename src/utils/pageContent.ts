import { StaticImageData } from 'next/image'
import FaceImage5 from '@/assets/images/Image5.jpg'
import FaceImage6 from '@/assets/images/Image6.jpg'

export interface IPageContent {
    title: string
    text: string
    img: StaticImageData
}

export const ABOUT_PAGE_CONTENT: IPageContent = {
    title: '🪄 About',
    text: 'About page content',
    img: FaceImage5,
}

export const CONTACTS_PAGE_CONTENT = {
    title: '📱 Contacts',
    text: 'Contacts page content',
    img: FaceImage6,
}
