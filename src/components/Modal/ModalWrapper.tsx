'use client'

import { useTransition, animated } from '@react-spring/web'
import { IChild } from '@/types/interfaces'
import styles from './ModalWrapper.module.scss'

const ModalWrapper = ({ children }: IChild) => {
    const transitions = useTransition(children, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    return transitions((style, item) => (
        <animated.div style={style} className={styles['module-wrapper']}>
            {item}
        </animated.div>
    ))
}
export default ModalWrapper
