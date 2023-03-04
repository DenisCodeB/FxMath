import React from 'react'
import Button from '../../ui/Button/Button'

export const Home = () => {
    return (
        <main id="main">
            <h1>Home</h1>
            <Button variant="primary" onClick={() => alert(1)}>
                CLICK
            </Button>
        </main>
    )
}
