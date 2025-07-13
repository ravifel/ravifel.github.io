import React, { useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import RoutesApp from './routes';
import './index.css';

export const ThemeContext = createContext(); // Theme Context

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? 'dark-theme' : 'light-theme'}>
        <BrowserRouter>
          <Header />
          <div className="container mt-4">
            <RoutesApp />
          </div>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
