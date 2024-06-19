import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import Button from '@/ui/Button/Button'
import BurgerMenu from '../../../../../public/assets/images/burger.svg'
import style from './BurgerButton.module.scss'

interface IBurger {
    toggle: Dispatch<SetStateAction<boolean>>
}

const BurgerButton = ({ toggle }: IBurger) => {
    return (
        <Button variant='styleless' onClick={() => toggle(pre => !pre)}>
            <Image
                className={style.burger}
                src={BurgerMenu}
                alt='Menu burger'
            />
        </Button>
    )
}

export default BurgerButton
