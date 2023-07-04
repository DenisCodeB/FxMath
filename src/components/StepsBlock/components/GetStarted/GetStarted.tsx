'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { PRACTICE_ROUTE } from '@/utils/routes'
import ArrowRightTwo from '@/assets/images/ArrowRight2.svg'
import Button from '@/ui/Button/Button'
import style from './GetStarted.module.scss'

const GetStarted = () => {
    const router = useRouter()

    const handleStartBtnClick = () => {
        router.push(PRACTICE_ROUTE)
    }

    return (
        <div className={style['get-started']}>
            <p className={style['get-started__text']}>To begin our practice,</p>
            <Button
                variant='primary'
                className='big'
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
