import styled from 'styled-components'
import Button from '../../ui/Button/Button'
import { ReactComponent as ArrowRightTwo } from '../../assets/images/ArrowRight2.svg'
import { ReactComponent as Ellips } from '../../assets/images/Ellips.svg'
import Headings from './children/Headings/Headings'
import FaceImages from './children/FaceImages/FaceImages'

const StyledWelcomeBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

const WelcomeTitle = styled.div`
    flex-basis: 50%;
    padding: 2rem;
`

const TitleWrapper = styled.div`
    float: right;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2.5rem;
`

const WelcomeImages = styled.div`
    flex-basis: 50%;
    position: relative;
    z-index: 0;

    svg {
        margin: 0 auto;
        display: block;
    }
`

const WelcomeBlock = () => {
    return (
        <StyledWelcomeBlock>
            <WelcomeTitle>
                <TitleWrapper>
                    <Headings />
                    <Button variant='primary' text='More'>
                        <ArrowRightTwo />
                    </Button>
                </TitleWrapper>
            </WelcomeTitle>
            <WelcomeImages>
                <Ellips />
                <FaceImages />
            </WelcomeImages>
        </StyledWelcomeBlock>
    )
}

export default WelcomeBlock
