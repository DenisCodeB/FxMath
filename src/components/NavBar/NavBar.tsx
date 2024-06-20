'use client'

import { useEffect, useRef, useState } from 'react'
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
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (toggleMenu) {
            window.addEventListener('click', hasParent)
        } else {
            removeEventListener('click', hasParent)
        }
    }, [toggleMenu])

    useEffect(() => {
        setToggleMenu(false)
    }, [pathname])

    const hasParent = (e: MouseEvent) => {
        const clickedElem = e.target as HTMLElement
        const nav = ref.current as HTMLDivElement
        if (!nav.contains(clickedElem)) {
            removeEventListener('click', hasParent)
            setToggleMenu(false)
        }
    }

    return (
        <div ref={ref} className={style['navbar-wrapper']}>
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
