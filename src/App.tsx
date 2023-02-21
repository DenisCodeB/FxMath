import { Header } from './modules/Header'
import { Footer } from './modules/Footer'
import { AppRouter } from './router'

export const App = () => {
    return (
        <>
            <Header />
            <AppRouter />
            <Footer />
        </>
    )
}
