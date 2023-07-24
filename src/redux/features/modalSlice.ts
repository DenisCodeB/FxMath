import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { NullOr } from '@/types/types'

type valueType = NullOr<'taskConfig'>

interface IInitial {
    modal: valueType
    info: {
        title: NullOr<string>
        text?: NullOr<string>
        error?: NullOr<number>
    }
}

const initialState = {
    modal: null,
    info: {
        title: null,
        text: null,
        error: null,
    },
} as IInitial

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, { payload }: PayloadAction<IInitial>) => {
            return { ...state, ...payload }
        },
        closeModal: state => {
            return initialState
        },
    },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
