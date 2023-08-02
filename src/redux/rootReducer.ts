import { combineReducers } from '@reduxjs/toolkit'
import modalSlice from './features/modalSlice'
import equationSlice from './features/equationSlice'

const rootReducer = combineReducers({
    modalSlice,
    equationSlice,
})

export { rootReducer }
