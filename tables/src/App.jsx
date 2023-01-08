// import { useParams } from 'react-router-dom';
import './App.css'

import { Link, Route, Routes, useParams } from 'react-router-dom';
import Home from './Components/home';
import ProductDetails from './Components/ProductDetails';
import Navbar from './Components/Navbar';


function App() {
  return(
    <div className='bg-gray-50 flex flex-col  h-screen overflow-scroll'>
    <Navbar />
    <Routes >
       <Route path='/' element={<Home />} ></Route>
       <Route path='/ProductDetails/:sku/' element={ <ProductDetails/> } ></Route>
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
