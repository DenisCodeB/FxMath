import { generateEquation } from '@/redux/features/equationSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { cleanAnswerInput } from '../components/Answer/utils/cleanInput'

export const useSwitchToNextEquation = () => {
    const dispatch = useAppDispatch()

    return () => {
        dispatch(generateEquation())
        cleanAnswerInput()
    }
}
