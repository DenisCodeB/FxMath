'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { PLAYGROUND_ROUTE } from '@/utils/routes'
import ArrowRightTwo from '@/assets/images/ArrowRight2.svg'
import Button from '@/ui/Button/Button'
import style from './GetStarted.module.scss'

const GetStarted = () => {
    const router = useRouter()

    const handleStartBtnClick = () => {
        router.push(PLAYGROUND_ROUTE)
    }

    return (
        <div className={style['get-started']}>
            <p className={style['get-started__text']}>To begin our practice,</p>
            <Button
                variant='primary'
                className={style['get-started__btn']}
                id='get-started'
                text='Get Started'
                onClick={handleStartBtnClick}
            >
                <Image src={ArrowRightTwo} alt='' />
            </Button>
        </div>
    )
}

export default GetStarted
