import NavBar from '../../components/NavBar/NavBar'
import Logo from '../../ui/Logo/Logo'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import style from './Header.module.scss'

const Header = () => {
    return (
        <div id='header' className={style.header}>
            <PageWrapper>
                <div className={style.header__content}>
                    <Logo />
                    <NavBar />
                </div>
            </PageWrapper>
        </div>
    )
}

export default Header
