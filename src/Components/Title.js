import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h1`
    margin:0;
    color:black;

`


const Title = ({title})=>{
    return (
        <div>
        <StyledTitle>{title}</StyledTitle>
        </div>
    )
}

export default Title