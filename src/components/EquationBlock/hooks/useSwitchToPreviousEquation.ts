import { previousEquation } from '@/redux/features/equationSlice'
import { useAppDispatch } from '@/redux/hooks'
import { AnswerInput } from '../components/Answer/utils/AnswerInput'

export const useSwitchToPreviousEquation = () => {
    const dispatch = useAppDispatch()

    return () => {
        dispatch(previousEquation())
        const input = new AnswerInput()
        input.clearInput()
    }
}
