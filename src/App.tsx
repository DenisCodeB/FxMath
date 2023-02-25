import { Header } from './modules/Header'
import { Footer } from './modules/Footer'
import { AppRouter } from './router'
import GlobalStyles from './styles/global'

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <AppRouter />
            <Footer />
        </>
    )
}
