import React from 'react';
import logo from './logo.svg';
import { Button, Icon, Modal} from 'semantic-ui-react';
//  Added the 'Model' component

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Got rid of Warran's sample text
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button size="small" color="green">
          <Icon name="download" />
          Download
        </Button>
      

{/* Created second button similar to class example (above)       */}

        <button size="large" color="blue">
          <Icon name="band aid" />
          Bandaid Button by Kel
        </button>

      </header>
    </div>
  );
}

export default App;


