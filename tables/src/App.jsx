// import { useParams } from 'react-router-dom';
import './App.css'

import { Link, Route, Routes, useParams } from 'react-router-dom';
import Home from './Components/home';
import ProductDetails from './Components/ProductDetails';
import Navbar from './Components/Navbar';
import { useState } from 'react';





function App() {

  const [totalItems, setTotalItems ] = useState(0);

  const handleAddtoKart = (itemId, itemCount) => {
    let newItems = +(itemCount);
    // console.log('itemCount: of ',itemId, itemCount);
    setTotalItems(totalItems + newItems);
  }


  return(
    <div className='bg-gray-50 flex flex-col w-full h-screen overflow-y-scroll'>
    <Navbar productCount={totalItems} />
    <Routes >
       <Route path='/' element={<Home />} ></Route>
       <Route path='/ProductDetails/:sku/' element={ <ProductDetails onAddtoKart={handleAddtoKart} /> } ></Route>
   </Routes>
   <Navbar />
    
  </div>
  )
  

  
}

export default App;

// return (
//   <div className='bg-gray-100 w-screen'>
//     <Navbar />
//     <div className="flex gap-y-6  ">
   
//     <Routes>
//       <Route path='/' element={<Home />} ></Route>
//       <Route path='/ProductDetails/:sku/' element={ <ProductDetails/> } ></Route>
//     </Routes>
    
//   </div>
//   </div>
// )
