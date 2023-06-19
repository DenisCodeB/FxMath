import Steps from './components/Steps/Steps'
import GetStarted from './components/GetStarted/GetStarted'
import style from './StepsBlock.module.scss'

const StepsBlock = () => {
    return (
        <div className={style['steps-block']}>
            <h2 className={style['steps-block__title']}>How to get started?</h2>
            <Steps />
            <GetStarted />
        </div>
    )
}

export default StepsBlock
