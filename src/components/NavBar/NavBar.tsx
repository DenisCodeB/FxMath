import { navLinks } from './helpers/navLinks'
import ListItem from '@/ui/ListItem/ListItem'
import style from './NavBar.module.scss'
import NavButtons from './components/NavButtons/NavButtons'

const NavBar = () => {
    return (
        <div className={style['navbar-wrapper']}>
            <nav className={style.navbar}>
                <ul className={style.navbar__list}>
                    {[...navLinks].map((item, ind) => {
                        return (
                            <ListItem
                                key={ind}
                                text={item[0]}
                                className='nav-items'
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
