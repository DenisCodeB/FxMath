import styled from 'styled-components'
import Quote from './children/Quote/Quote'

const StyledQuoteBlock = styled.div`
    width: 100%;
    padding: 1rem;
    border: var(--border-dev);
`

const QuoteBlockContent = styled.div`
    border: var(--border-dev);
`

const QuoteHeader = styled.div``

const HashHeading = styled.span``

const QuoteBody = styled.div``

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
