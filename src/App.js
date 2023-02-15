import React from 'react'
import Countries from './components/Countries';
import Header from './components/Header';
import Search from  './components/Search';


function App() {
  return(
        <div>
          <Header />
          <Search />
          <Countries />
        </div>
   )
}

export default App;
