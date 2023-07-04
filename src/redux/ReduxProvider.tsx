'use client'

import { Provider } from 'react-redux'
import { IReactNode } from '@/types/reactNode'
import { store } from './store'

const ReduxProvider = ({ children }: IReactNode) => {
    return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
