// import { useParams } from 'react-router-dom';
import './App.css'
import Teacher from './Components/teacher'
import Student from './Components/student'
// import TShirt from './Components/TShirt'



import Product from './Components/Product';
import Tables from './Components/Table'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Home from './Components/home';
import ProductDetails from './Components/ProductDetails';
// import completeArr from './dummydata';

// import { createBrowserRouter,
//   RouterProvider, } from 'react-router'

function App() {



  
  
  let key1 = "table1";
  let key2 = "table2";
  return (
    <div className=''>
      <div className="flex gap-y-6 bg-yellow-300 ">
      <h1 className="text-4xl font-black text-indigo-700 w-100">Items listed</h1>
      {/* <Link className='bg-gray-400 p-2 w-1/1 ' to='/Product'>Teacher's page</Link>
      <Link className='bg-gray-400 p-2 w-1/1' to='/students' >Students page</Link> */}
      {/* <Tables key={key1} /> */}
      {/* <Tables key={key2} /> */}
      
      {/* <Product /> */}
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/ProductDetails/:sku/' element={ <ProductDetails/> } ></Route>
      </Routes>
      
    </div>
    {/* {path.indexOf('/teachers') != -1 ? <Teacher /> : false}
    {path.indexOf('/students') != -1 ? <Student /> : false} */}
    {/* <Routes>
      <Route path='/teachers' element={<Teacher />}></Route>
      <Route path='/students' element={<Student />}></Route>
    </Routes> */}
    </div>
  )
}

export default App;
