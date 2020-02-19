import React, { useEffect, useState } from "react";
import "./App.css";
import Explanation from "./Components/Explanation"
import Image from "./Components/Image"
import Title from "./Components/Title"
import Axios from "axios";

function App() {
  const [nasaData,setNasaData]=useState({})
  useEffect(()=>{
    Axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response=>{
          setNasaData(response.data);
        })
        .catch(error=>{console.log("something went wrong", error)}) 
  },[]);
  return (
    <div className="App">
      <Title title={nasaData.title}/>
      <Image hdurl={nasaData.hdurl}/>
      <Explanation explanation={nasaData.explanation}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
