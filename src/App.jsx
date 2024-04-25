// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CharacterProvider } from './context/CharacterContext';
import Characters from './components/Characters';
import CharacterDetail from './components/CharacterDetail';


function App() {
  return (
    <Router>
      <CharacterProvider>
        <Routes>
          <Route path="/" element={<Characters/>} />
          <Route path="/character/:id" element={<CharacterDetail/>} />
        </Routes>
      </CharacterProvider>
    </Router>
  );
}

export default App;
