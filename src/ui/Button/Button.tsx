import { HTMLProps, ReactNode } from 'react'
import styled from 'styled-components'

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
    children?: ReactNode
    className?: string
    type?: 'button' | 'reset' | 'submit' | undefined
    disabled?: boolean
    variant: 'primary' | 'secondary'
    text?: string
}

const StyledButton = styled.button<IButtonProps>`
    background-color: var(--prymary-btn-background-color);
    border: 1px solid blue;
    padding: 1rem;
    width: 5rem;
`

const Button = ({
    children,
    className = 'hello',
    type = 'button',
    disabled,
    variant = 'primary',
    text,
    ref,
    as,
    ...props
}: IButtonProps) => {
    return (
        <StyledButton
            className={className}
            type={type}
            disabled={disabled}
            variant={variant}
            {...props}
        >
            {text}
            {children}
        </StyledButton>
    )
}

export default Button
