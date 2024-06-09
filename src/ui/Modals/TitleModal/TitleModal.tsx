'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { closeModal } from '@/redux/features/modalSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Button from '@/ui/Button/Button'
import { PLAYGROUND_ROUTE } from '@/utils/routes'
import Mark from '../../../../public/assets/images/Mark.svg'
import style from './TitleModal.module.scss'

const TitleModal = () => {
    const { title } = useAppSelector(state => state.modalSlice.info)
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDivElement>(null)
    const pathname = usePathname()

    useEffect(() => {
        const listener = (e: MouseEvent) => {
            if (
                e.target !== ref.current &&
                !ref.current?.contains(e.target as HTMLElement)
            ) {
                document.removeEventListener('click', listener)
                dispatch(closeModal())
            }
        }

        pathname === PLAYGROUND_ROUTE
            ? document.addEventListener('click', listener)
            : dispatch(closeModal())
    }, [pathname])

    const handleClick = () => dispatch(closeModal())

    return (
        <div ref={ref} className={style.modal}>
            <div className={style.modal__header}>
                <Button variant='styleless' onClick={handleClick}>
                    <Image src={Mark} alt='' />
                </Button>
            </div>
            <div className={style.modal__body}>
                <span className={style.modal__title}>{title}</span>
            </div>
        </div>
    )
}

export default TitleModal
