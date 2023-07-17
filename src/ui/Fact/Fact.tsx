'use client'

import { FACTS_MOCK } from '@/utils/facts'
import { useRandom } from '@/components/Explore/components/hooks/useRandom'
import style from './Fact.module.scss'

interface IData {
    id: number
    fact: string
}

const Fact = () => {
    const { fact } = useRandom<IData>(FACTS_MOCK)

    return <span className={style.fact}>{fact}</span>
}

export default Fact
