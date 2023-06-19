import { HTMLProps, ReactNode } from 'react'
import c from 'classnames'
import style from './Button.module.scss'

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
    children?: ReactNode
    className?: 'plain' | 'big'
    type?: 'button' | 'reset' | 'submit'
    disabled?: boolean
    variant: 'primary' | 'secondary'
    text: string
}

const Button = ({
    children,
    className = 'plain',
    type = 'button',
    disabled,
    variant = 'primary',
    text,
    ...props
}: IButtonProps) => {
    return (
        <button
            className={c(
                style.button,
                style[`button_${className}`],
                style[`button_${variant}`]
            )}
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
