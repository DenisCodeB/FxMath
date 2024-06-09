'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { PLAYGROUND_ROUTE } from '@/utils/routes'
import NavBar from '../../components/NavBar/NavBar'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import Logo from '../../ui/Logo/Logo'
import style from './Header.module.scss'
import mainStyle from '../MainWrapper/MainWrapper.module.scss'

const Header = () => {
    const pathname = usePathname()
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const header = ref.current
        const main = document.getElementById('main')
        const styles = style.header_hidden
        const mainStyles = mainStyle['main-wrapper_up']

        if (pathname === PLAYGROUND_ROUTE) {
            header?.classList.add(styles)
            main?.classList.add(mainStyles)
        } else {
            header?.classList.remove(styles)
            main?.classList.remove(mainStyles)
        }
    }, [pathname])

    return (
        <header ref={ref} id='header' className={style.header}>
            <PageWrapper>
                <div className={style.header__content}>
                    <Logo />
                    <NavBar />
                </div>
            </PageWrapper>
        </header>
    )
}

export default Header
