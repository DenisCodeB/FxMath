import { ReactNode } from 'react'

interface IH2 {
    children: ReactNode
    className: string
}

const H2 = ({ children, className }: IH2) => {
    return <h2 className={className}>{children}</h2>
}

export default H2
