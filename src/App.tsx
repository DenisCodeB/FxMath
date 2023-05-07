import { BrowserRouter } from 'react-router-dom'
import Header from './modules/Header'
import Footer from './modules/Footer'
import GlobalStyles from './styles/global'
import { AppRouter } from './router'

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyles />
                <Header />
                <AppRouter />
                <Footer />
            </BrowserRouter>
        </>
    )
}
