import Form from '../components/Form'
import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../components/Context';
import SearchBar from '../components/SearchBar'
import Content from '../components/Content'
import MyProvider from '../components/Provider';






function Home() {

  const { isDarkMode, toggleMode } = useContext(MyContext);

  const [contentList, setContentList] = useState([]);




  async function fetchdata() {
    try {
      const response = await fetch('http://localhost:8000/appointments', {
        method: "GET"
      });
  
      if (response.ok) {
        const data = await response.json();
       
        setContentList(data)
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  

useEffect(()=> {
  fetchdata()
},[])

  const handleSubmit = (data) => {
    setContentList([...contentList, data]);
  };

  const [search, setSearch] = useState('')


  const handlchange = (e) =>{
    setSearch(e.target.value)
    const f = filterData(e.target.value);
    setContentList(f)
  }

  const filterData = (search) => {
    const regex = new RegExp(search, "i");
    console.log(regex);
    return contentList.filter((item) => regex.test(item.petName))
  }

  

  return (
    <>

      {/* <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
        <h1>Theme Switcher</h1>
        <button onClick={toggleMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div> */}



      <MyProvider>

        <Form onFormSubmit={handleSubmit} isDark={isDarkMode} />
        <br></br>
        <SearchBar label={'SEARCH'} isDark={isDarkMode} value={search} handlchange={handlchange}/>
        <br></br>
        <Content contentList={contentList} isDark={isDarkMode}/>

      </MyProvider>








    </>


  );

}



export default Home