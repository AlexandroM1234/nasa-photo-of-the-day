import React from "react"
import styled from "styled-components"

const ExplanationContainer=styled.div`
`

const Explanation=({explanation})=>{
    return (
        <ExplanationContainer>
            <p>{explanation}</p>    
        </ExplanationContainer>
    )
}

export default Explanation