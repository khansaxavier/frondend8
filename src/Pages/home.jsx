import { useNavigate } from "react-router-dom";
import Header from "../Componen/Header";
import Layout from "../Componen/Layout";
import SideBar from "../Componen/SideBar";
import Utama from "../Componen/Utama";
import Navbar from "../Componen/navbar";
import Button from "../Componen/Button";

function Home() {
    const navigate = useNavigate();
    const handleClick =()=> {
        navigate("/IndukProps")
    }
    return ( 
        <>
            <Navbar/>
            <Layout>
                <Button text="Menu" onClick={handleClick} color="blue"/>
                <Utama/>
                
            </Layout>
        </>
     );
}

export default Home;

