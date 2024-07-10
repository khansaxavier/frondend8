import { useEffect, useState } from "react";
import UpdateState from "../Componen/UpdateState";
import Animasi from "../Componen/Animasi";
import FetchApi from "../Componen/FetchApi";

function UseEffect() {
    const [harga, setHarga] = useState(10000)
    const [qty, setQty] = useState(2)
    const [subTotal, setSubTotal] = useState(0)
    

        useEffect(() =>{
            setSubTotal(harga * qty)
    },[harga * qty]);
    return (  
        <>
            <div className="container ml-8">
                <h1 className="text-3xl text-bold">Use Effect Reactivity</h1>
                <UpdateState/>
            </div>
            <div className="container ml-4">
                <h1 className="text-3xl text-bold">Animasi Timer</h1>
                <Animasi/>
            </div>
            <div className="container ml-4">
                <h1 className="text-3xl text-bold">Fetch Data API </h1>
                <FetchApi/>
            </div>   
                
            
        </>
     );
}

export default UseEffect;