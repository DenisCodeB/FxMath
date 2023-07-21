'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ArrowRightTwo from '../../../../assets/images/ArrowRight2.svg'
import Button from '@/ui/Button/Button'
import Headings from '../Headings/Headings'
import style from './Title.module.scss'

const Title = () => {
    const router = useRouter()

    const handleClick = () => {
        router.push('#get-started')
    }

    return (
        <div className={style['welcome-block__title']}>
            <Headings />
            <Button onClick={handleClick} variant='primary' text='More'>
                <Image src={ArrowRightTwo} alt='' />
            </Button>
        </div>
    )
}

export default Title
