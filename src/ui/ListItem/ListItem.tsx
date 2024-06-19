import c from 'classnames'
import Link from 'next/link'
interface IListItem {
    text: string
    className: string
    path: string
}

const ListItem = ({ text, className, path }: IListItem) => {
    return (
        <li className={c(className)}>
            <Link href={path}>{text}</Link>
        </li>
    )
}

export default ListItem
