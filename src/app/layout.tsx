import { ReactNode } from 'react'
import c from 'classnames'
import { lato, montserrat, montserratBold } from '@/styles/fonts'
import Header from '@/modules/Header'
import Footer from '@/modules/Footer'
import '../styles/global.scss'

interface IRootLayout {
    children: ReactNode
}

const RootLayout = ({ children }: IRootLayout) => {
    return (
        <html
            lang='en'
            className={c(
                lato.variable,
                montserrat.variable,
                montserratBold.variable
            )}
        >
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
