import Link from 'next/link'
import style from './ListItem.module.scss'

interface IListItem {
    text: string
    className: 'nav-items'
    path: string
}

const ListItem = ({ text, className, path }: IListItem) => {
    return (
        <li className={style[className]}>
            <Link href={path}>{text}</Link>
        </li>
    )
}

export default ListItem
