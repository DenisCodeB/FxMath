import styled from 'styled-components'

const StyledQuote = styled.div``

const QuoteContent = styled.div``

const QuoteImage = styled.img``

const QuoteText = styled.p``

const QuoteAuthor = styled.p``

const Quote = () => {
    return (
        <StyledQuote>
            <QuoteContent>
                <QuoteText></QuoteText>
                <QuoteAuthor></QuoteAuthor>
            </QuoteContent>
            <QuoteImage />
        </StyledQuote>
    )
}

export default Quote
