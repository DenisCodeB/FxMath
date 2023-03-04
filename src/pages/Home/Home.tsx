import React from 'react'
import Button from '../../ui/Button/Button'

const sum = (x: number, y: number): number => x + y
export { sum }

export const Home = () => {
    console.log(sum(1, 3))

    return (
        <main id="main">
            <h1>Home</h1>
            <Button variant="primary" onClick={() => console.log(1)}>
                CLICK
            </Button>
        </main>
    )
}
