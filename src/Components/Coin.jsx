import { useState } from "react";
import Coin1 from "./Coin1";
import Coin2 from "./Coin2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Coin = () => {
    let [a,seta] = useState(23)

    let coin = () =>{
        seta(Math.floor(Math.random() * 10))
        console.log(a);
        if(a % 2 == 0 ){
            toast.dark("Its a Heads");
        }
        else {
            toast.success("Its a Tails");
        }
    }
    return ( 
         
            <div onClick={coin} className="coin">
            <ToastContainer/>

                {a % 2 == 0 ? <Coin1/>  : <Coin2/>}
            </div>
        
     );
}
 
export default Coin;