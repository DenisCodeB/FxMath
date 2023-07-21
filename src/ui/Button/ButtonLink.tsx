import { HTMLProps, ReactNode } from 'react'
import c from 'classnames'
import Link from 'next/link'
import style from './Button.module.scss'

interface IButtonLink extends HTMLProps<HTMLAnchorElement> {
    children?: ReactNode
    className?: 'plain' | 'big'
    variant: 'primary' | 'secondary'
    text: string
    href: string
}

const ButtonLink = ({
    children,
    className = 'plain',
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
            className={c(
                style.button,
                style[`button_${className}`],
                style[`button_${variant}`]
            )}
            alt=''
            {...props}
        >
            {text}
            {children}
        </Link>
    )
}

export default ButtonLink
