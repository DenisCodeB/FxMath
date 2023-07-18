import PageWrapper from '../../components/PageWrapper/PageWrapper'
import style from './Footer.module.scss'

const Footer = () => {
    return (
        <footer id='footer' className={style.footer}>
            <PageWrapper>
                <div className={style.footer__content}>
                    <p className={style.footer__source}>Open source project</p>
                    <p className={style.footer__year}>2023 🧸</p>
                </div>
            </PageWrapper>
        </footer>
    )
}

export default Footer
