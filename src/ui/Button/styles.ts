import { css } from "styled-components";
import { flexCentralize } from "../../styles/templates";

const primaryButtonStyle = css`
    background-color: var(--prymary-btn-background-1);
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: var(--radius-10);
    font-size: var(--fs-18);
    font-family: Lato;
    font-weight: normal;
    color: var(--fourth-text-color);
    ${flexCentralize};
    flex-direction: row-reverse;
    gap: 0.5rem;
    cursor: pointer;
`

export {
    primaryButtonStyle,
}