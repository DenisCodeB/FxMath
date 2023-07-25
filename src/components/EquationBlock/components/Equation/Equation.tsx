import { renderEquation } from '../../utils/generateEquation'
import style from '../../EquationBlock.module.scss'

const Equation = () => {
    const { answer, equation } = renderEquation()

    return <span className={style.equation__task}>{equation}</span>
}

export default Equation
