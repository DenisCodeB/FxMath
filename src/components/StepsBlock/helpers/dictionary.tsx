import Step1 from '../../../assets/images/Step1.png'
import Step2 from '../../../assets/images/Step2.png'
import Step3 from '../../../assets/images/Step3.png'
import Poligon1 from '../../../assets/images/poligon1.svg'
import Poligon2 from '../../../assets/images/poligon2.svg'
import Poligon3 from '../../../assets/images/poligon3.svg'
import { IStepInfo } from '../components/types/types'
import style from '../components/Step/Step.module.scss'
import Emphasized from '@/ui/Emphasized/Emphasized'
import Image from 'next/image'

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
        img: Step1,
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
        img: Step2,
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
        img: Step3,
    },
]

export { stepsConf }
