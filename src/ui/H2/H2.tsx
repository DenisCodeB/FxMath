import { HTMLProps, ReactNode } from 'react'

interface IH2 extends HTMLProps<HTMLHeadingElement> {
    children: ReactNode
    className: string
}

const H2 = ({ children, className, ...props }: IH2) => {
    return (
        <h2 className={className} {...props}>
            {children}
        </h2>
    )
}

export default H2
