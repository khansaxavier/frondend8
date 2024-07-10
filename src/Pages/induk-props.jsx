import Layout from "../Componen/Layout";
import Menu from "../Componen/Menu";
import Props from "../Componen/props";
import { useNavigate } from "react-router-dom";
import Button from "../Componen/Button";

const IndukProps = () => {
    const pesanan= {"makanan": "Pelasan  Wader",
                    "minuman": "jeruk nipis",
                    "pelanggan": true
                };
    const pesanan1= {"makanan": "Pelasan  uling",
                    "minuman": "Es lumpur bletok",
                    "pelanggan": false
                };
    const menuMakanan = [ "Pelasa Wader",
                         "Pelasan uling",];
    const menuMinuman = [ "jeruk nipis",
                       "Es lumpur bletok"];
    return ( 
        <>
            <Props menuMakanan={menuMakanan} menuMinuman={menuMinuman} pesanan={pesanan}/>
            <Props menuMakanan={menuMakanan} menuMinuman={menuMinuman} pesanan={pesanan1}/> 
            
        </>
     );
}
const IndukPropsLayout = () => {
    const navigate = useNavigate();
    const handleClick =()=> {
        navigate("/")
    }
    return ( 
        <Layout>
            <Button text="Home" onClick={handleClick} color="blue"/>
            <IndukProps/>
        </Layout>
     );
}
 
export default IndukPropsLayout;
 
// export default IndukProps;