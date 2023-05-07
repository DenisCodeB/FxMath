import styled from 'styled-components'
import H1 from '../../../../ui/H1/H1'
import H3 from '../../../../ui/H3/H3'

const StyledHeadings = styled.div`
    text-align: right;
`

const Headings = () => {
    return (
        <StyledHeadings>
            <H1 variant='primary'>#online_math</H1>
            <H3>endless practice problems 😊</H3>
        </StyledHeadings>
    )
}

export default Headings
