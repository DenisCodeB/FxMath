import { combineReducers } from '@reduxjs/toolkit'
import modalSlice from './features/modalSlice'

const rootReducer = combineReducers({
    modalSlice,
})

export { rootReducer }
