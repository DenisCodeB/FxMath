import styled from 'styled-components'
import Button from '../../../../ui/Button/Button'
import { ReactComponent as CalculationSvg } from '../../../../assets/images/Calculation.svg'

const ButtonsWrap = styled.div`
    display: flex;
    justify-content: space-between;
`

const NavButtons = () => {
    return (
        <ButtonsWrap>
            <Button variant='secondary' text='Practice'>
                <CalculationSvg />
            </Button>
        </ButtonsWrap>
    )
}

export default NavButtons
