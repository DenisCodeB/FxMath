import { sum } from "./pages/Home/Home"

describe('sum', () => {
    it('sums up two numbers', () => {
        expect(sum(2, 4)).toBe(6)
    })
})