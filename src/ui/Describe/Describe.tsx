import c from 'classnames'
import style from './Describe.module.scss'

interface IDescribe {
    title: string
    description: string
    reversed: boolean
}

const Describe = ({ title, description, reversed }: IDescribe) => {
    return (
        <div
            className={c(style.describe, {
                [style.describe_reversed]: reversed,
            })}
        >
            <span className={style.describe__title}>{title}</span>
            <p className={style.describe__description}>{description}</p>
        </div>
    )
}

export default Describe
