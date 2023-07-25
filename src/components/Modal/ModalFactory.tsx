'use client'

import { useAppSelector } from '@/redux/hooks'
import TitleModal from '@/ui/Modals/TitleModal/TitleModal'
import ModalWrapper from './ModalWrapper'

const ModalFactory = () => {
    const modalName = useAppSelector(state => state.modalSlice.modal)

    const buildModal = () => {
        switch (modalName) {
            case 'taskConfig':
                return <TitleModal />
            case null:
                break
        }
    }

    return modalName && <ModalWrapper>{buildModal()}</ModalWrapper>
}

export default ModalFactory
