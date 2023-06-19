import c from 'classnames'
import { ReactNode } from 'react'

interface IEmphasized {
    children: ReactNode
    classArray: string[]
}

const Emphasized = ({ children, classArray }: IEmphasized) => {
    return <span className={c(...classArray)}>{children}</span>
}

export default Emphasized
