'use client'

import { useAppSelector } from '@/redux/hooks'
import style from './TaskTip.module.scss'

const TaskTip = () => {
    const isAnswerRight = useAppSelector(state => state.equationSlice.isRight)

    const renderTip = () => {
        return isAnswerRight ? 'Right' : 'Start typing to write the answer'
    }

    return (
        <div className={style['task-tip']}>
            <span className={style['task-tip__text']}>{renderTip()}</span>
        </div>
    )
}

export default TaskTip
