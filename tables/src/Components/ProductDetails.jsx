import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from './Api'
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Loading from "./Loading";


const ProductDetails = () => {
    const sku = +useParams().sku;
    
    const [ product, setProduct ] = useState({});
    console.log(product);

    useEffect(() => { 
      // console.log('Running useEffect')  
      const data = getProduct(sku);
      data.then((response) => {
        setProduct(response.data);
      })
    }, [sku])    
    if(Object.keys(product).length == 0 ) {
      return (
        <Loading />
      )
    }
    return (
      <div className="grow px-8 py-6 min-w-[100%]">
          <img className="w-28 mb-3
          " src={product.thumbnail} alt="" />
          <p className="font-semibold">{product.title}</p>
          <p>Price: ${product.price}</p>
          <p className="text-black-600">DESC: {product.description}</p>
          <div className="flex justify-around pt-12"> 
          <div>
            { sku > 1 && <Link className="text-white-700 font-bold" to={'/ProductDetails/'+ (sku - 1)} > 
            <HiArrowLeft className="text-white text-2xl"></HiArrowLeft>
            </Link>}
          </div>
            
            <Link className="text-red-700" to={'/ProductDetails/'+ (sku + 1)} >
              <HiArrowRight className="text-white text-2xl"></HiArrowRight> </Link>
          </div>
      </div>
    )
}

export default ProductDetails;


