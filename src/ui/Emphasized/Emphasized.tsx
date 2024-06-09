import { ReactNode } from 'react'
import c from 'classnames'

interface IEmphasized {
    children: ReactNode
    classArray: string[]
}

const Emphasized = ({ children, classArray }: IEmphasized) => {
    return <span className={c(...classArray)}>{children}</span>
}

export default Emphasized
