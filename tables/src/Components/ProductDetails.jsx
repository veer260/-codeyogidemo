import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from './Api'
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Loading from "./Loading";


const ProductDetails = ({ onAddtoKart }) => {
    console.log('rerun')
    const sku = +useParams().sku;
    // console.log('sku:', sku)
    
    const [ product, setProduct ] = useState({});
    const [ count, setCount ] = useState(1);
    console.log(count);


    useEffect(() => { 
      // console.log('useEffect running'
      const data = getProduct(sku);
      data.then((response) => {
        setProduct(response.data);
        setCount(1);
      })}, [sku]) 

      if( Object.keys(product).length == 0 ) {
      return (
        <Loading />
      )

    }

    const handleSubmitToCart = () => {
      onAddtoKart(sku, count);
    }

    const handleCountChange = (e) => {
      setCount(e.target.value); 
    }

    return (
      <div className="grow relative flex w-[80%] mx-auto">
        <div className="w-[40%] relative">
          <img className="max-w-[70%] mb-3
            " src={product.thumbnail} 
            alt="{product.title}" />
        <div className="">
          <input className="w-12 p-2 mr-4" value={count} onChange={handleCountChange} type="number" />
          <button
            onClick={handleSubmitToCart} 
            className="px-2 py-1 text-sm bg-primary-dark font-medium text-white rounded-md">
            Add to cart
          </button>
        </div>
            
        </div> 

        <div className="flex flex-col justify-center pl-12 ">
        <p className="font-semibold">{
          product.title}</p>
          <p>Price: ${product.price}</p>
          <p className="text-black-600">Description: {product.description}</p>
          <p>Manufactured by {product.brand}</p>
          <p>In stock, only {product.stock} left </p>
          <p>{product.rating}</p>

          <div className="absolute bottom-0 right-0 w-[60%] flex justify-around pt-12"> 
            <div>
              { sku > 1 && <Link className="text-white-700 font-bold" to={'/ProductDetails/'+ (sku - 1)} > 
              <HiArrowLeft className="text-black text-2xl"></HiArrowLeft>
              </Link>}
            </div>
              
              <Link className="text-red-700 mb-20" to={'/ProductDetails/'+ (sku + 1)} >
                <HiArrowRight className="text-black text-2xl"></HiArrowRight> 
                </Link>
        </div>
          </div>
      </div>
    )
}

export default ProductDetails;


