import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scrape from "./Scrape";


// Create a function component on mount to check dom for any email address
// possibly use a regex formula to see if anything can get picked up

function App() {
  return (
    <div className="App">
<Scrape></Scrape>
    </div>
  );
}

export default App;
