import Emphasized from '@/ui/Emphasized/Emphasized'
import Poligon1 from '../../../../public/assets/images/poligon1.svg'
import Poligon2 from '../../../../public/assets/images/poligon2.svg'
import Poligon3 from '../../../../public/assets/images/poligon3.svg'
import { IStepInfo } from '../components/types/types'
import style from '../components/Step/Step.module.scss'

type StepsArray = Array<IStepInfo>

const stepsConf: StepsArray = [
    {
        id: 1,
        bg: Poligon1,
        title: (
            <>
                Choose your available now{' '}
                <Emphasized classArray={[style.bold, style.bold_one]}>
                    task mode
                </Emphasized>
            </>
        ),
        ex: 'For example: Equations',
    },
    {
        id: 2,
        bg: Poligon2,
        title: (
            <>
                <Emphasized classArray={[style.bold, style.bold_two]}>
                    Set up
                </Emphasized>{' '}
                your task mode as you need
            </>
        ),
        ex: 'For example: Linear equations',
    },
    {
        id: 3,
        bg: Poligon3,
        title: (
            <>
                Start to practice and{' '}
                <Emphasized classArray={[style.bold, style.bold_three]}>
                    just progress
                </Emphasized>{' '}
                with us!
            </>
        ),
        ex: "Really, that's all",
    },
]

export { stepsConf }
