import { css } from "styled-components";
import { flexCentralize } from "../../styles/templates";

const primaryButtonStyle = css`
    background-color: var(--transparent);
    border: var(--primary-btn-border);
    box-shadow: var(--first-box-shadow);
    font-size: var(--fs-25);
    width: fit-content;
    padding: 0.5rem 1.5rem;
    color: var(--first-text-color);
    transition: all .15s linear;

    &:hover {
        transform: scale(1.05);

        svg {
            transform: translateX(0.2rem);
        }
    }

    svg {
        margin-top: 0.2rem;
        transition: all .1s linear;
        width: 1.75rem;
    }
`

const secondaryButtonStyle = css`
    background-color: var(--secondary-btn-background-1);
    padding: 0.5rem 0.75rem;
    border: none;
    font-size: var(--fs-16);
    color: var(--fourth-text-color);
    flex-direction: row-reverse;
    gap: 0.375rem;

    svg {
        width: 0.875rem;
    }
`

const bigButtonStyle = css`
    font-family: var(--ff-M);
    font-weight: bold;
    font-size: var(--fs-25);
    border: var(--second-btn-border); 
    box-shadow: var(--third-box-shadow);
    padding: 1rem 2rem;
    border-radius: var(--radius-30);
`

export {
    primaryButtonStyle,
    secondaryButtonStyle,
    bigButtonStyle,
}