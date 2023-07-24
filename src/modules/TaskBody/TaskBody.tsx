import TaskTip from '@/components/TaskTip/TaskTip'
import style from './TaskBody.module.scss'
import EquationBlock from '@/components/EquationBlock/EquationBlock'

const TaskBody = () => {
    return (
        <section>
            <TaskTip />
            <EquationBlock />
        </section>
    )
}

export default TaskBody
