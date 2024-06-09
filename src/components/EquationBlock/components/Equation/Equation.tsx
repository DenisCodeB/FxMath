'use client'

import { useEffect } from 'react'
import { generateEquation } from '@/redux/features/equationSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import style from '../../EquationBlock.module.scss'

const Equation = () => {
    const equation = useAppSelector(state => state.equationSlice.equation)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(generateEquation())
    }, [])

    return <span className={style.equation__task}>{equation}</span>
}

export default Equation
