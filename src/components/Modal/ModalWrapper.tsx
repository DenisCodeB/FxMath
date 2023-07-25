'use client'

import { PropsWithChildren, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import styles from './ModalWrapper.module.scss'

const ModalWrapper = ({ children }: PropsWithChildren) => {
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
