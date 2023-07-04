import { jest, describe, test } from '@jest/globals'
import { render } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import HomePage from '@/app/page'

const pushMock = jest.fn<() => >()

const renderHomePage = () => {
    jest.mock('next/navigation', () => ({
        useRouter: jest.fn(),
    }))
    useRouter.mockReturnValue({
        push: pushMock,
    })

    return render(<HomePage />)
}

describe('Starting test', () => {
    test('Is app bootstrapped', () => {
        const { getByRole } = renderHomePage()
        expect(getByRole('main')).toBeInTheDocument()
    })
})
