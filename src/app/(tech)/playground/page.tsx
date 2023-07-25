import TaskBody from '@/modules/TaskBody'
import TaskHeaderConfig from '@/modules/TaskHeaderConfig'
import style from './Playground.module.scss'

const PlaygroundPage = () => {
    return (
        <section className={style['playground-wrapper']}>
            <TaskHeaderConfig />
            <TaskBody />
        </section>
    )
}

export default PlaygroundPage
