'use client'

import { Provider } from 'react-redux'
import { IChild } from '../types/interfaces'
import { store } from './store'

const ReduxProvider = ({ children }: IChild) => {
    return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
