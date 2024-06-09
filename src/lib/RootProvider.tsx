import ReduxProvider from '@/redux/ReduxProvider'
import { IChild } from '@/types/interfaces'

const RootProvider = ({ children }: IChild) => {
    return <ReduxProvider>{children}</ReduxProvider>
}

export default RootProvider
