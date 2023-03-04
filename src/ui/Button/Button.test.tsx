import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button, { IButtonProps } from './Button'

const makeSut = (props: Partial<IButtonProps>) => {
    return render(
        <Button variant="primary" text="text" onClick={jest.fn()} {...props} />
    )
}

describe('test Button component', () => {
    test('render Button component', () => {
        const { getByText } = makeSut({ text: 'Click me' })

        expect(getByText(/Click me/)).toBeInTheDocument()
    })

    test('fire onClick Button event', () => {
        const spy = jest.fn()
        const { getByText } = makeSut({ onClick: spy })

        fireEvent.click(getByText(/text/))
        expect(spy).toHaveBeenCalled()
    })
})
