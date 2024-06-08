'use client'

import { useRouter } from 'next/navigation'
import Image, { StaticImageData } from 'next/image'
import c from 'classnames'
import { useAppDispatch } from '@/redux/hooks'
import { openModal } from '@/redux/features/modalSlice'
import Describe from '@/ui/Describe/Describe'
import Button from '@/ui/Button/Button'
import style from './TaskTopic.module.scss'

interface ITaskTopic {
    id: number
    title: string
    desciption: string
    url: StaticImageData
}

const TaskTopic = ({ id, title, desciption, url }: ITaskTopic) => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const handleClick = () => {
        if (id === 1) return router.back()
        else
            return dispatch(
                openModal({
                    modal: 'taskConfig',
                    info: { title: 'Coming soon' },
                }),
            )
    }
    return (
        <div
            className={c(style['task-topic'], {
                [style['task-topic_reversed']]: id === 2,
            })}
        >
            <Button onClick={handleClick} variant={'styleless'}>
                <Image className={style['task-topic__img']} src={url} alt='' />
            </Button>
            <Describe
                title={title}
                description={desciption}
                reversed={id % 2 === 0}
            />
        </div>
    )
}

export default TaskTopic
