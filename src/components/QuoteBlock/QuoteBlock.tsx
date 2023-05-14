import styled from 'styled-components'
import { flexCentralize } from '../../styles/templates'
import HashHeading from '../../ui/HashHeading/HashHeading'
import Quote from './children/Quote/Quote'

const StyledQuoteBlock = styled.div`
    width: 100%;
    padding: 2.5rem;
    border-radius: var(--radius-30) 0 var(--radius-50) var(--radius-30);
    background-color: var(--second-background-color);
    box-shadow: var(--second-box-shadow);

    ${flexCentralize}
`

const QuoteBlockContent = styled.div``

const QuoteHeader = styled.div`
    width: 100%;
    border-bottom: var(--primary-btn-border);
    padding: 0.5rem;
`

const QuoteBody = styled.div`
    margin-top: 1.5rem;
`

const QuoteBlock = () => {
    return (
        <StyledQuoteBlock>
            <QuoteBlockContent>
                <QuoteHeader>
                    <HashHeading>#quote</HashHeading>
                </QuoteHeader>
                <QuoteBody>
                    <Quote />
                </QuoteBody>
            </QuoteBlockContent>
        </StyledQuoteBlock>
    )
}

export default QuoteBlock
