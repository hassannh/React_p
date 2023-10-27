import './App.css';
import Form from './components/Form'
import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import Append from './components/Append';
import Content from './components/Content'
import TextErea from './components/TextErea'
import bellowContent from './components/Content';
import Navbar from './components/SearchBar'


function App() {

  if (!localStorage.getItem("contentList"))
    localStorage.setItem("contentList", JSON.stringify([]));

  const [inputText, setInputText] = useState('');
  const [contentList, setContentList] = useState(JSON.parse(localStorage.getItem("contentList")));

  // useEffect(()=>{
  //   console.log('hi hassan');
  // },[])


  const handleSubmit = (data) => {
    // console.log(data);
    setContentList([...contentList, data]);
  };


  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>

      <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
        <h1>Theme Switcher</h1>
        <button onClick={toggleMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      <Form onFormSubmit={handleSubmit} isDark={isDarkMode} />
      <br></br>

      <SearchBar label={'SEARCH'} />

      <br></br>

      <Content contentList={contentList} />


    </>


  );
}

export default App;
