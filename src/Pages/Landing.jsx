import { Link } from "react-router-dom";
import Utama from "../Componen/Utama";
import Props from "../Componen/props";
import LandingPage from "./LandingPage";

function Landing() {
    const pesanan ={
        "meja" : 1,
        "makanan" : "Pelasan Oling",
        "minuman" : "Es Jeruk Nipis",
        "pelanggan" : true};
    return ( 
        <>
            <LandingPage> 
                <Utama/>
                <div className="my-8">
                    <Link to="/" 
                        className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
                        home
                    <button type="button"
                        className=" mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate('/')}>
                            home
                            </button>
                    </Link>
                </div>
            </LandingPage>
        </>
     );
}


export default Landing;