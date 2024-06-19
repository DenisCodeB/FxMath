import { ReactNode } from 'react'
import c from 'classnames'
import style from './HashHeading.module.scss'

interface IHashHeading {
    children: ReactNode
    className?: string
}

const HashHeading = ({ children, className }: IHashHeading) => {
    return <span className={c(style.hash, className)}>{children}</span>
}

export default HashHeading
