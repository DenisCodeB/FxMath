import { StaticImageData } from 'next/image'
import FaceImage5 from '../../public/assets/images/Image5.jpg'
import FaceImage6 from '../../public/assets/images/Image6.jpg'

export interface IPageContent {
    title: string
    text: string
    img?: StaticImageData
}

// 'About us' page mock data
export const ABOUT_PAGE_CONTENT: IPageContent = {
    title: '🎀 About us',
    text: "Hey, I'm front-end developer. And it's a pet-project, where you can solve unlimited, endless, \
and infinite equations. Let's practice with us right now.\nBy the way, there will be even more features in the future. \
My project uses tech stack like React, NextJS, Typescript and others.\nThanks for your user experience!",
    img: FaceImage5,
}

// 'Contacts' page mock data
export const CONTACTS_PAGE_CONTENT: IPageContent = {
    title: '🎙️ Contacts',
    text: "Hi, I'm developer of this study project. You can contact me on GitHub. I'm open to any cooperations. \
Glad to work with you, and happy to hear your suggestions.",
    img: FaceImage6,
}

// 'Not Found' page mock data
export const NOT_FOUND_PAGE_CONTENT: IPageContent = {
    title: '🧐 404',
    text: 'WoW. Page not found :/',
}
