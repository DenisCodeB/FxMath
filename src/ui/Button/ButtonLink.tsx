import { HTMLProps, ReactNode } from 'react'
import c from 'classnames'
import Link from 'next/link'
import style from './Button.module.scss'

interface IButtonLink extends HTMLProps<HTMLAnchorElement> {
    children?: ReactNode
    variant: 'primary' | 'secondary'
    text: string
    href: string
}

const ButtonLink = ({
    children,
    className,
    type = 'button',
    variant = 'primary',
    text,
    href,
    ref,
    as,
    ...props
}: IButtonLink) => {
    return (
        <Link
            href={href}
            className={c(style.button, style[`button_${variant}`], className)}
            alt=''
            {...props}
        >
            {text}
            {children}
        </Link>
    )
}

export default ButtonLink
