import './App.css';
import React, { useEffect, useState } from "react";
import Travel from './components/Travel';
import Outdoor from './components/Outdoor';
import Services from './components/Services';
import Collection from './components/Collection';
import Gallery from './components/Gallery';
import Latestnews from './components/Latestnews';
import Newscard from './components/Newscard';
import Imagecard from './components/Imagecard';
import VR from './components/VR';

function App() {
  var [results, setResult] = useState([])

  useEffect(function() {
    fetch("./data.json")
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      setResult(data)
    })
  }, [])
  
	return (
    <div className="App">
      <div className="threecolumn">
        <Travel result={results}/>
        <Outdoor result={results}/>
      </div>
      <Services results={results}/>
      <Collection results={results}/>
      <div className="bigGrid">
        <Gallery results={results}/>
        <Latestnews results={results}/>
        <Newscard results={results}/>
        <Imagecard results={results}/>
        <VR result={results}/>
      </div>
      
    
    </div>
  )
}

export default App;
