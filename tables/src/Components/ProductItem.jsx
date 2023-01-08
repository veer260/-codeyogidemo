import { Link, Route, Routes} from "react-router-dom";
// import TShirt from "./TShirt";

const ProductItem = ( {title, price, thumbnail, id} ) => {
    // console.log(id);
    return (
        <div className=" max-w-xs ">
            <div className="w-full">
            <img className="aspect-square object-cover" src={thumbnail} alt="" />
            </div>
            
            <p>Price: ${price}</p>
            <p>Name: {title}</p>
            <Link className="text-red-700" to={'/ProductDetails/'+ id} >View details </Link>
           
        </div> 
    )
}

export default ProductItem;