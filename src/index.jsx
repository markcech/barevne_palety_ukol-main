import React from 'react';
import { createRoot } from 'react-dom/client';
import { palettes } from './palettes';
import { Palette } from './components/Palette';
import './style.css';

const App = () => {
  return (
    <div className="container">

      <header>
        <h1>Barevné palety</h1>
      </header>
      
      <main>
        {palettes.map((palette)=> (
          <Palette
            paletteData = {palette}
            key = {palette.name}
          />
        ))}   
      </main>

      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>

    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
