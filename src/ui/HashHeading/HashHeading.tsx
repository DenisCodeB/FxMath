import { ReactNode } from 'react'
import style from './HashHeading.module.scss'

interface IHashHeading {
    children: ReactNode
}

const HashHeading = ({ children }: IHashHeading) => {
    return <span className={style.hash}>{children}</span>
}

export default HashHeading
