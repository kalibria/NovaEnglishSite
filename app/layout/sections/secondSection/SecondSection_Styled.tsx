import styled from "styled-components";

type HighlightedProps = {
    color: string
}

const Highlighted = styled.span<HighlightedProps>`
    color: ${props => props.color}
`


const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 28px;
`

export const S = {
    Highlighted,
    Card
}