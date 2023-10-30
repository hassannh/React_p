import Home from './pages/Home'
import React from 'react';
import MyProvider from '../src/components/Provider';





function App() {
return (

<MyProvider>
      <Home />
</MyProvider>
)
 
}

export default App;
