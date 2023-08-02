import { renderEquation } from '@/components/EquationBlock/utils/generateEquation'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
    answer: number | string | null
    equation: string | null
    isRight: boolean
}

const initialState = {
    answer: null,
    equation: null,
    isRight: false,
} as IInitialState

const equationSlice = createSlice({
    name: 'equation',
    initialState,
    reducers: {
        generateEquation: state => {
            return { ...state, ...renderEquation() }
        },
        checkAnswer: (state, { payload }: PayloadAction<number>) => {
            if (state.answer === payload) {
                state.isRight = true
            } else state.isRight = false
        },
    },
})

export const { generateEquation, checkAnswer } = equationSlice.actions
export default equationSlice.reducer
