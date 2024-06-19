'use client'

import c from 'classnames'
import { useApiDataFetch } from '@/hooks/useApiDataFetch'
import { FACT_API } from '@/utils/routes'
import style from './Fact.module.scss'

interface IData {
    id: number
    fact: string
}

const Fact = ({ className }: { className: string }) => {
    const { fact } = useApiDataFetch<IData>(FACT_API)

    return <span className={c(style.fact, className)}>{fact}</span>
}

export default Fact
