'use client'

import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { generateEquation } from '@/redux/features/equationSlice'
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
