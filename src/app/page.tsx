import { Metadata } from 'next'
import HomeContent from '@/modules/HomeContent'

export const metadata: Metadata = {
    title: 'FxMath - endless math',
    description: 'Home page FxMath - website with any endless exercises',
}

const HomePage = () => {
    return <HomeContent />
}

export default HomePage
