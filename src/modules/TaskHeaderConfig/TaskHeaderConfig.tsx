import TaskTopic from '@/components/TaskTopic/TaskTopic'
import { topics } from '@/components/TaskTopic/utils/dictionary'
import style from './TaskHeaderConfig.module.scss'

const TaskHeaderConfig = () => {
    return (
        <section className={style['task-header']}>
            {topics.map((topic, ind) => (
                <TaskTopic key={ind} {...topic} />
            ))}
        </section>
    )
}

export default TaskHeaderConfig
