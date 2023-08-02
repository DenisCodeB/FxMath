import { checkAnswer } from '@/redux/features/equationSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { AnswerInput } from '../Answer/utils/AnswerInput'

export const useCheckAnswer = () => {
    const dispatch = useAppDispatch()

    return () => {
        const input = new AnswerInput()

        input.getInputValue() &&
            dispatch(checkAnswer(input.getInputValue() as number))
    }
}
