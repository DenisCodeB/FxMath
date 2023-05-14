import styled from 'styled-components'
import Step from '../Step/Step'
import { stepsConf } from '../../helpers/dictionary'

const StyledSteps = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 20rem;
    margin-top: 10rem;
`

const Steps = () => {
    return (
        <StyledSteps>
            {stepsConf.map(elem => (
                <Step key={elem.id} {...elem} />
            ))}
        </StyledSteps>
    )
}

export default Steps
