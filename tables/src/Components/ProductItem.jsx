import { Link, Route, Routes} from "react-router-dom";
// import TShirt from "./TShirt";

const ProductItem = ( {title, price, imgURL, id} ) => {
    console.log(id);
    return (
        <div className="border-none rounded-md bg-gray-100 p-3 text-black-500 font-bold">
            <img className="w-20" src={imgURL} alt="" />
            <p>Price: {price}</p>
            <p>Name: {title}</p>
            <Link className="text-red-700" to={'/ProductDetails/'+ id} >View details </Link>
           
        </div> 
    )
}

export default ProductItem;