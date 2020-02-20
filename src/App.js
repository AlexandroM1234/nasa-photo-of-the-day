import React, { useEffect, useState } from "react";
import "./App.css";
import Explanation from "./Components/Explanation"
import Image from "./Components/Image"
import Title from "./Components/Title"
import Axios from "axios";
import styled from "styled-components";

const StyledApp=styled.div`
    background-image: linear-gradient(#FF0091,#2265E1,#00FFF4);
    text-align:center;
    height=100vh;
  `

function App() {
  const [nasaData,setNasaData]=useState({})
  useEffect(()=>{
    Axios
        .get("https://api.nasa.gov/planetary/apod?api_key=WOdrlWHuMVOHmcMCNOPrXCkAAIIsi3dNDZt2ivWg")
        .then(response=>{
          setNasaData(response.data);
        })
        .catch(error=>{console.log("something went wrong", error)}) 
  },[]);
  return (
    <StyledApp>
      <Title title={nasaData.title}/>
      <Image hdurl={nasaData.hdurl}/>
      <Explanation explanation={nasaData.explanation}/>
    </StyledApp>
  );
}

export default App;