import React from 'react';
import bon from './assets/bon.wav';
import { useStyles } from 'react-styles-hook'
import './App.css';

const styles = useStyles({
})

const App = () => {
  const audio = new Audio(bon);
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Buddhist_Swastika_with_24_Beads.svg/2048px-Buddhist_Swastika_with_24_Beads.svg.png'} className="App-logo" alt="logo" />
        <p>
          Freeman and Cole's Website!
        </p>
        <button onClick={() => {audio.play()}}>
          Home Music
        </button>
      </header>
    </div>
  );
}

export default App;
