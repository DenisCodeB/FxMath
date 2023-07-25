import { PropsWithChildren } from 'react'
import c from 'classnames'
import { lato, montserrat, montserratBold, rubik } from '@/styles/fonts'
import Header from '@/modules/Header'
import Footer from '@/modules/Footer'
import MainWrapper from '@/modules/MainWrapper'
import ReduxProvider from '@/redux/ReduxProvider'
import ModalFactory from '@/components/Modal/ModalFactory'
import '../styles/global.scss'

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <html
            lang='en'
            className={c(
                lato.variable,
                montserrat.variable,
                montserratBold.variable,
                rubik.variable
            )}
        >
            <body>
                <ReduxProvider>
                    <Header />
                    <MainWrapper>{children}</MainWrapper>
                    <Footer />
                    <ModalFactory />
                </ReduxProvider>
            </body>
        </html>
    )
}

export default RootLayout
