import styled from "styled-components"

const TitleEstilizado = styled.h2`
    color: ${(props) => props.color || "#f5f5f5"};
`
const Title = (props) => {
    return (
        <TitleEstilizado color={props.labelColor}>{props.text}</TitleEstilizado>
    )
}

export default Title