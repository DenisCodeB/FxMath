import { ReactNode } from 'react'
import style from './PageWrapper.module.scss'

interface IPageWrapper {
    children: ReactNode
}

const PageWrapper = ({ children }: IPageWrapper) => {
    return <div className={style['page-wrapper']}>{children}</div>
}

export default PageWrapper
