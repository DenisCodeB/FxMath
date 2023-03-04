import { BrowserRouter } from 'react-router-dom'
import { Header } from './modules/Header'
import { Footer } from './modules/Footer'
import { AppRouter } from './router'
import GlobalStyles from './styles/global'

export const App = () => {
    console.log(1)
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
