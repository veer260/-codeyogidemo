import { useState } from "react";
import ProductItem from "./ProductItem";
import completeArr from "../dummydata";

const Product = () => {
    

    const [query, setQuery ] = useState('');
    const [ sort, setSort ] = useState('default');
    

    let arr = completeArr.filter((item) => {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) == -1 ? false : true;
    }) 
    // console.log(arr);

    if(sort === 'price') {
        arr.sort((x, y) => {
            return x.price - y.price
        })
    }

    if(sort === 'name') {
        arr.sort((x, y) => {
            return x.name < y.name ? -1 : 1
        })
    }


    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSortChange = (e) => {
        setSort(e.target.value)
    }


    return(
        <div className="w-180 bg-orange-200">
            <select className="p-3 bg-green-50 rounded-lg mr-6" value={sort}
            onChange= {handleSortChange} >
                <option value="default">default sort</option>
                <option value="price">Sort by Price</option>
                <option value="Name">Sort by Name</option>
            </select>

            <input className="bg-pink-50 my-4 rounded-md p-3 text-indigo-400" placeholder="Search" 
            type="text" 
            onChange={handleQueryChange}
            value={query}
            />

            <div className="flex  gap-x-6">
            {arr.map((item) => {
                return (
                    <ProductItem {...item} />
                )
            })}
            </div>
        </div>
    )
}

export default Product;