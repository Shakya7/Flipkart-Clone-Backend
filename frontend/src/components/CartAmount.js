import { useContext, useEffect} from "react"
import { GlobalContext } from "./GlobalContext";
import { CartContext } from "./CartPage";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function CartAmount(){
    const {state}=useContext(GlobalContext);
    const [addressToDeliver,setAddressToDeliver]=useContext(CartContext);
    const navigation=useNavigate();

    const checkBackend=async()=>{
        try{
            const a=await axios.post("/test",{
                test1:state.cartProducts.reduce((acc,el)=>Number(el.price)*Number(el.quantity)+acc,0).toFixed(2)
            });
            console.log(a);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        

    },[])

    return(
        <div style={{backgroundColor:"white",width:"27%", display:"flex",flexDirection:"column", height:"67vh",boxShadow:"5px 5px 5px grey", borderColor:"grey", borderStyle:"solid", borderWidth:"1px",padding:"20px"}}>
            <div>PRICE DETAILS</div>
            <hr/>
            <br/>
            <br/>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>Price ({state.cart}) <span>{state.cart<=1?"item":"items"}</span></div>
                <div>₹{(state.cartProducts.reduce((acc,el)=>Number(el.price)*Number(el.quantity)+acc,0)).toFixed(2)}</div>
            </div> 
            <br/>
            <br/>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>Delivery Charges</div>
                <div>₹{state.cart<=2?50:state.cart<=5?100:"Free"}</div>
            </div> 
            <br/>  
            <br/>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{fontWeight:"bold",fontSize:"1.5rem"}}>Total Amount</div>
                <div>₹{((state.cartProducts.reduce((acc,el)=>Number(el.price)*Number(el.quantity)+acc,0))+(state.cart<=2?50:state.cart<=5?100:0)).toFixed(2)}</div>
            </div>
            <br/>
            <br/>
            <div onClick={e=>checkBackend()} 
                style={{width:"70%",padding:"20px",backgroundColor:"#FFEEAD",alignSelf:"center",textAlign:"center",borderRadius:"5px"}}>
                PLACE ORDER
            </div>

            
        </div>
    )
}