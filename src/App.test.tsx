import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { App } from './App'

const makeSut = () => {
    return render(<App />)
}

describe('Test App component', () => {
    test('Render App', () => {
        const { getByRole } = makeSut()
        expect(getByRole('main')).toBeInTheDocument()
    })
})
