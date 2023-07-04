import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
    value: number
}

const initialState = {
    value: 0,
} as IInitialState

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value++
        },
        decrement: state => {
            state.value--
        },
    },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
