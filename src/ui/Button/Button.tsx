import { HTMLProps, ReactNode } from 'react'
import c from 'classnames'
import style from './Button.module.scss'

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
    children?: ReactNode
    className?: string
    type?: 'button' | 'reset' | 'submit'
    disabled?: boolean
    variant: 'primary' | 'secondary' | 'styleless'
    text?: string
}

const Button = ({
    children,
    className,
    type = 'button',
    disabled,
    variant = 'primary',
    text,
    ...props
}: IButtonProps) => {
    return (
        <button
            className={c(style.button, style[`button_${variant}`], className)}
            type={type}
            disabled={disabled}
            {...props}
        >
            {text}
            {children}
        </button>
    )
}

export default Button
