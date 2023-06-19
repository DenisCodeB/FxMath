import { StaticImageData } from "next/image"
import { ReactNode } from "react"

export interface IStepInfo {
    id: number
    title: ReactNode
    ex: string
    img: StaticImageData
}