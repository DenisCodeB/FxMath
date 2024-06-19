'use client'

import { useEffect } from 'react'
import { generateEquation } from '@/redux/features/equationSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import style from './Equation.module.scss'

const Equation = () => {
    const equation = useAppSelector(state => state.equationSlice.equation)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(generateEquation())
    }, [])

    return <span className={style.task}>{equation}</span>
}

export default Equation
