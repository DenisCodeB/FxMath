import { Metadata } from 'next'
import TaskBody from '@/modules/TaskBody'
import TaskHeaderConfig from '@/modules/TaskHeaderConfig'
import style from './Playground.module.scss'

export const metadata: Metadata = {
    title: 'FxMath - Playground',
    description:
        'FxMath playground is good and stable environment for solving math problems.',
}

const PlaygroundPage = () => {
    return (
        <section className={style['playground-wrapper']}>
            <TaskHeaderConfig />
            <TaskBody />
        </section>
    )
}

export default PlaygroundPage
