import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export interface IStepInfo {
    id: 1 | 2 | 3
    bg: StaticImageData
    title: ReactNode
    ex: string
    img: StaticImageData
}
