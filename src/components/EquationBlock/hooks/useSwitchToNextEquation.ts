import { generateEquation } from '@/redux/features/equationSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { cleanAnswerInput } from '../components/Answer/utils/cleanInput'

export const useSwitchToNextEquation = () => {
    const dispatch = useAppDispatch()
    const currentEquationInfo = useAppSelector(state => state.equationSlice)

    return () => {
        dispatch(generateEquation())
        cleanAnswerInput()
    }
}
