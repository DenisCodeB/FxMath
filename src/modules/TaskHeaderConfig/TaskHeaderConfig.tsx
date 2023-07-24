import TaskTopic from '@/components/TaskTopic/TaskTopic'
import style from './TaskHeaderConfig.module.scss'
import { topics } from '@/components/TaskTopic/utils/dictionary'

const TaskHeaderConfig = () => {
    return (
        <section className={style['task-header']}>
            {topics.map((topic, ind) => (
                <TaskTopic {...topic} />
            ))}
        </section>
    )
}

export default TaskHeaderConfig
