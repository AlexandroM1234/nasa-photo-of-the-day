import React from "react"
import styled from "styled-components"

const StyledImage=styled.img`
    width:50%;
`

const Image = ({hdurl})=>{

    return <StyledImage src={hdurl}/>

}

export default Image