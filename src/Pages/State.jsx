import { useState } from "react";
import Layout from "../Componen/Layout";

function State() {
    const [bil1, setBil1] = useState(6)
    const [bil2, setBil2] = useState(10)
    const [hasil, setHasil] = useState(0)
    const penambahan = ()=>{
       setHasil(parseInt(bil1) + parseInt(bil2))
    }
    const pengurangan = ()=>{
        setHasil(bil1 - bil2)
    }
    const perkalian = ()=>{
        setHasil(bil1 * bil2)
    }
    
    return ( 
        <>
            <Layout>
                
                <p>Bil1 : <input type="text" className="border border -gray" value={bil1}
                onChange={(e) => setBil1(e.target.value)}/></p>
                <p>Bil2 : <input type="text" className="border border -gray" value={bil2}
                onChange={(e) => setBil1(e.target.value)}/></p>
                <p>Hasil : {hasil}</p>

                <button type="button"
                        className=" mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={penambahan}>
                            Tambah
                </button>
                <button type="button"
                        className=" mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={pengurangan}>
                            Kurang
                </button>
                <button type="button"
                        className=" mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={perkalian}>
                            Kali
                </button>
            </Layout>
        </>

     );
}

export default State;