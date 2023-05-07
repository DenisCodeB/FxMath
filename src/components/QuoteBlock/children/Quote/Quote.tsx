import styled from 'styled-components'
import { quotes } from '../../../../utils/quotes'
import Trophy from '../../../../assets/images/Trophy.png'
import { backgroundDefault, flexCentralize } from '../../../../styles/templates'

const StyledQuote = styled.div`
    ${flexCentralize};
    gap: 3rem;
`

const QuoteContent = styled.div``

const QuoteImage = styled.div`
    width: 5rem;
    height: 5rem;
    background-image: url(${Trophy});
    ${backgroundDefault}
`

const QuoteText = styled.p`
    font-size: var(--fs-20);
    font-family: var(--ff-V);
    color: var(--first-text-color);
    font-style: italic;
`

const QuoteAuthor = styled.p`
    font-size: var(--fs-16);
    font-family: var(--ff-V);
    color: var(--second-text-color);
    text-align: right;
    margin-top: 1rem;
`

const Quote = () => {
    return (
        <StyledQuote>
            <QuoteContent>
                <QuoteText>{quotes[0].quote}</QuoteText>
                <QuoteAuthor>{quotes[0].author}</QuoteAuthor>
            </QuoteContent>
            <QuoteImage />
        </StyledQuote>
    )
}

export default Quote
