// Configuration.js
import React, { useState, useEffect } from 'react';

function Configuration() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'enabled');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>Dark</button>
    </div>
  );
}

export default Configuration;
