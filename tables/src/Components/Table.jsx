import { useState } from "react";
import TableRow from "./TableRow";

const Tables = () => {

    const [num, setA ] = useState(3);

    const handleClick = () => {
        setA(num + 1);
    }

    const handleChange = (e) => {
        setA(+(e.target.value))
    }

    return(
        <div>
            <input className="border bg-red-200" onChange={handleChange} value={num} type="text" ></input>
            <TableRow num={num} index={1}/>
            <TableRow num={num} index={2}/>
            <TableRow num={num} index={3}/>
            <TableRow num={num} index={4}/>

            <button className="bg-gray-800 text-white p-2 rounded-md mt-4 font-bold" onClick={handleClick}> Next table</button>
        </div>
    )
}

export default Tables;