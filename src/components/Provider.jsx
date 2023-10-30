import React, { useState, useContext } from 'react';
import MyContext from './Context'; 

function MyProvider({ children }) {



  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <MyContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
