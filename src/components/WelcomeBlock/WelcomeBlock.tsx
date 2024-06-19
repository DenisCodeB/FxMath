'use client'

import c from 'classnames'
import { InView } from 'react-intersection-observer'
import BackRounds from './components/BackRounds/BackRounds'
import FaceImages from './components/FaceImages/FaceImages'
import ScrollDown from './components/ScrollDown/ScrollDown'
import Title from './components/Title/Title'
import style from './WelcomeBlock.module.scss'

const WelcomeBlock = () => {
    return (
        <InView threshold={0}>
            {({ inView, ref }) => (
                <section
                    ref={ref}
                    className={c(style['welcome-block'], {
                        [style['welcome-block_hide']]: !inView,
                    })}
                >
                    <div
                        className={c(
                            style['welcome-block__content'],
                            style.describe,
                        )}
                    >
                        <div className={style['describe__title-wrapper']}>
                            <Title />
                        </div>
                        <div className={style['describe__images']}>
                            <FaceImages />
                            <BackRounds />
                        </div>
                    </div>
                    <ScrollDown />
                </section>
            )}
        </InView>
    )
}

export default WelcomeBlock
