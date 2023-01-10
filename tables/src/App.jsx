// import { useParams } from 'react-router-dom';
import './App.css'

import { Link, Route, Routes, useParams } from 'react-router-dom';
import Home from './Components/home';
import ProductDetails from './Components/ProductDetails';
import Navbar from './Components/Navbar';
import { useState } from 'react';





function App() {

  const [ cart, setCart ] = useState({});
  // const [totalItems, setTotalItems ] = useState(0);

  const handleAddtoKart = (itemId, itemCount) => {
    let newItems = +(itemCount);
    let oldItems =  cart[itemId] || 0;
    const newCart = { ... cart};
    newCart[itemId] = oldItems + newItems;
    
    setCart(newCart);
    console.log(cart);

   
    // console.log('itemCount: of ',itemId, itemCount);
    // setTotalItems(totalItems + newItems);
  }

  const totalItems = Object.keys(cart).reduce((output, current) => {
    return output + cart[current];
  }, 0);

  console.log("totalitems: ", totalItems)

  return(
    <div className='bg-gray-50 flex flex-col w-full h-screen overflow-y-scroll'>
    <Navbar productCount={totalItems} />
    <Routes >
       <Route path='/' element={<Home />} ></Route>
       <Route path='/ProductDetails/:sku/' element={ <ProductDetails onAddtoKart={handleAddtoKart} /> } ></Route>
   </Routes>
  </div>
  )  
}

export default App;


