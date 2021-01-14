import './App.css';
import React, { useEffect, useState } from "react";
import Travel from './components/Travel';
import Outdoor from './components/Outdoor';
import Services from './components/Services';
import Collection from './components/Collection';
import Gallery from './components/Gallery';

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
      <div className="twocolumn">
        <Travel result={results}/>
        <Outdoor result={results}/>
      </div>
      <Services results={results}/>
      <Collection results={results}/>
      <Gallery results={results}/>
    </div>
  )
}

export default App;
