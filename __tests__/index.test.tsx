import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import H1 from '@/ui/H1/H1'

describe('H1 - rendering', () => {
    it('should show text', () => {
        render(<H1>Some text...</H1>)
        expect(screen.getByText('Some text...')).toBeInTheDocument()
    })
})
