import Round from '@/ui/Round/Round'
import { rounds } from './dictionary'
import style from './BackRounds.module.scss'

const BackRounds = () => {
    return (
        <div className={style['back-rounds']}>
            {rounds.map(el => (
                <Round key={el} id={el} />
            ))}
        </div>
    )
}

export default BackRounds
