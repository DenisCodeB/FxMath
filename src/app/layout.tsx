import c from 'classnames'
import ModalFactory from '@/components/Modal/ModalFactory'
import RootProvider from '@/lib/RootProvider'
import Footer from '@/modules/Footer'
import Header from '@/modules/Header'
import MainWrapper from '@/modules/MainWrapper'
import { lato, montserrat, montserratBold, rubik } from '@/styles/fonts'
import { IChild } from '@/types/interfaces'
import '../styles/global.scss'

const RootLayout = ({ children }: IChild) => {
    return (
        <html
            lang='en'
            className={c(
                lato.variable,
                montserrat.variable,
                montserratBold.variable,
                rubik.variable,
            )}
        >
            <body>
                <RootProvider>
                    <Header />
                    <MainWrapper>{children}</MainWrapper>
                    <Footer />
                    <ModalFactory />
                </RootProvider>
            </body>
        </html>
    )
}

export default RootLayout
