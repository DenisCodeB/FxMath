import HomeContent from '@/modules/HomeContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FxMath - endless math',
    description: 'Home page FxMath - website with any endless exercises',
}

const HomePage = () => {
    return <HomeContent />
}

export default HomePage
