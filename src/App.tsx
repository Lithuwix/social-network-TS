import React from 'react';
import './App.css';
import {MainContent} from "./components/MainContent/MainContent";
import {state} from "./redux/state";

function App() {
  return (
    <div className="App">
     Hello, samurai! Let's go!
        <MainContent/>
    </div>
  );
}

export default App;
