import { useParams } from "react-router-dom";
import completeArr from "../dummydata";

const ProductDetails = () => {
    // console.log(imgURL);
    const {sku} = useParams();

    console.log(sku);

    let product;

  for ( let i = 0; i< completeArr.length; i++ ) {
    if (completeArr[i].id == sku) {
      product = completeArr[i];
      break;
    }
  }
  console.log(product);
        
    return (
        <div className="bg-teal-500 w-full ">
            <img className="w-20
            " src={product.imgURL} alt="" />
            <p>{product.title}</p>

        </div>
    )
}

export default ProductDetails;