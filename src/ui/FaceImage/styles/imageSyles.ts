import { css } from "styled-components";

const firstImage = css`
    --ratio: 150px;
    width: var(--ratio);
    height: var(--ratio);
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`

const secondImage = css`
    --ratio: 160px;
    width: var(--ratio);
    height: var(--ratio);
    grid-row: 1 / 3;
    grid-column: 3 / 6;
    align-self: center;
`

const thirdImage = css`
    --ratio: 100px;
    width: var(--ratio);
    height: var(--ratio);
    grid-row: 2 / 5;
    grid-column: 1 / 2;
    justify-self: center;
    align-self: center;
`

const fourthImage = css`
    --ratio: 180px;
    width: var(--ratio);
    height: var(--ratio);
    grid-row: 3 / 7;
    grid-column: 2 / 6;
    align-self: center;
`

export {
    firstImage,
    secondImage,
    thirdImage,
    fourthImage
}