import { combineReducers } from '@reduxjs/toolkit'
import equationSlice from './features/equationSlice'
import modalSlice from './features/modalSlice'

const rootReducer = combineReducers({
    modalSlice,
    equationSlice,
})

export { rootReducer }
