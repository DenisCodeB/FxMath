import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import { ReactNode } from 'react'

interface ITaskModesLayout {
    children: ReactNode
}

const TaskModesLayout = ({ children }: ITaskModesLayout) => {
    return (
        <>
            <Breadcrumbs />
            {children}
        </>
    )
}
