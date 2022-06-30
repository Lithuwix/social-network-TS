import React from 'react';
import './App.css';
import {SocialNetwork} from "./components/SocialNetwork/SocialNetwork";
import {state} from "./redux/state";

function App() {
  return (
    <div className="App">
        <SocialNetwork/>
    </div>
  );
}

export default App;
