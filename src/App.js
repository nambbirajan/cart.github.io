import './App.css';
import Header from './Components/Navbar';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Home from './Home';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [searchQuery,setSearchQuery]=useState('')
  return (
    

    <div className="App">
      <Header setSearchQuery = {setSearchQuery} />
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path='/Product' element={<Product searchQuery = {searchQuery}/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
