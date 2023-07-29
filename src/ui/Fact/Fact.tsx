'use client'

import { FACT_API } from '@/utils/routes'
import { useApiDataFetch } from '@/hooks/useApiDataFetch'
import style from './Fact.module.scss'

interface IData {
    id: number
    fact: string
}

const Fact = () => {
    const { fact } = useApiDataFetch<IData>(FACT_API)

    return <span className={style.fact}>{fact}</span>
}

export default Fact
