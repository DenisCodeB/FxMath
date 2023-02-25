import { ReactNode } from 'react'
import styled from 'styled-components'

export interface IButtonProps {
    children: ReactNode
    className?: string
    type?: 'button' | 'reset' | 'submit' | undefined
    disabled?: boolean
    variant: 'primary' | 'secondary'
}

const StyledButton = styled.button<IButtonProps>`
    background-color: var(--prymary-btn-background-color);
    border: 1px solid blue;
    padding: 1rem;
    width: ${({ variant }) => (variant === 'primary' ? '360px' : '10px')};
`

const Button = ({
    children,
    className = 'hello',
    type = 'button',
    disabled,
    variant = 'primary',
}: IButtonProps) => {
    return (
        <StyledButton
            className={className}
            type={type}
            disabled={disabled}
            variant={variant}
        >
            {children}
        </StyledButton>
    )
}

export default Button
