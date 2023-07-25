import c from 'classnames'
import style from './Round.module.scss'

interface IRound {
    id: 1 | 2 | 3 | 4
}

const Round = ({ id }: IRound) => {
    return <div className={c(style.round, style[`round_${id}`])}></div>
}

export default Round
