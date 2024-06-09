import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'

export interface IStepInfo {
    id: 1 | 2 | 3
    bg: StaticImageData
    title: ReactNode
    ex: string
}
