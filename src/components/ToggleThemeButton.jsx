import React, { useState, useEffect } from 'react';

const ToggleThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Sync state with the actual class on the body element
    setIsDarkMode(document.body.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className='bg-black text-white dark:bg-blue-300 dark:text-black px-4 py-1 rounded-2xl'
      onClick={toggleDarkMode}
    >
      Toggle {isDarkMode ? '☀️' : '🌕'}
    </button>
  );
};

export default ToggleThemeButton;
