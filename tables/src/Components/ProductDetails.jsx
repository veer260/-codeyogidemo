import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from './Api'
// import completeArr from "../dummydata";

const ProductDetails = () => {
    // console.log(imgURL);
    const {sku} = useParams();
    // console.log('sku:' +sku);

    const [ product, setProduct ] = useState({});

    useEffect(() => {
   
      const data = getProduct(sku);
      data.then((response) => {
        setProduct(response.data);
      })
    }, [])

   

    

    // console.log(sku);

    // let product;

  // for ( let i = 0; i< completeArr.length; i++ ) {
  //   if (completeArr[i].id == sku) {
  //     product = completeArr[i];
  //     break;
  //   }
  // }
  // console.log(product);
        
    return (
        <div className="bg-teal-500 px-8 py-6 ">
            <img className="w-28 mb-3
            " src={product.thumbnail} alt="" />
            <p className="font-semibold">{product.title}</p>
            <p>Price: ${product.price}</p>
            <p className="text-black-600">DESC: {product.description}</p>

        </div>
    )
}

export default ProductDetails;