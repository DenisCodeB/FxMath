import { ReactNode } from 'react'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import style from './MainWrapper.module.scss'

interface IMain {
    children: ReactNode
}

const MainWrapper = ({ children }: IMain) => {
    return (
        <main id='main' className={style['main-wrapper']}>
            <PageWrapper>{children}</PageWrapper>
        </main>
    )
}

export default MainWrapper
