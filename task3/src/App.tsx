import React from 'react';

import './App.css';
import { TextField } from './components/TextField/TextField';

function App() {
  return (
    <div className="App">
        <TextField limit={10} />
        <TextField limit={20} />
    </div>
  );
}

export default App;
