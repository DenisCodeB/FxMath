'use client'

import { useEffect, useState } from 'react'
import c from 'classnames'
import { usePathname } from 'next/navigation'
import { navLinks } from './helpers/navLinks'
import ListItem from '@/ui/ListItem/ListItem'
import BurgerButton from './components/BurgerButton/BurgerButton'
import NavButtons from './components/NavButtons/NavButtons'
import style from './NavBar.module.scss'

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    const pathname = usePathname()

    useEffect(() => {
        setToggleMenu(false)
    }, [pathname])

    return (
        <div className={style['navbar-wrapper']}>
            <BurgerButton toggle={setToggleMenu} />
            <nav
                className={c(style.navbar, {
                    [style.navbar_visible]: toggleMenu,
                })}
            >
                <ul className={style.navbar__list}>
                    {[...navLinks].map((item, ind) => {
                        return (
                            <ListItem
                                key={ind}
                                text={item[0]}
                                className={style.navbar__items}
                                path={item[1]}
                            />
                        )
                    })}
                </ul>
                <NavButtons />
            </nav>
        </div>
    )
}

export default NavBar
