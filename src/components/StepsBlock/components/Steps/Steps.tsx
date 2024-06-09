import { stepsConf } from '../../helpers/dictionary'
import Step from '../Step/Step'
import style from './Steps.module.scss'

const Steps = () => {
    return (
        <div className={style.steps}>
            {stepsConf.map(elem => (
                <Step key={elem.id} {...elem} />
            ))}
        </div>
    )
}

export default Steps
