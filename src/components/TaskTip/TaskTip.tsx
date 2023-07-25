import style from './TaskTip.module.scss'

const TaskTip = () => {
    return (
        <div className={style['task-tip']}>
            <span className={style['task-tip__text']}>
                Start typing to write the answer
            </span>
        </div>
    )
}

export default TaskTip
