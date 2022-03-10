
import { useEffect, useState,useContext,createContext } from "react";
import CartAmount from "./CartAmount";
import CartProducts from "./CartProducts";
import { GlobalContext } from "./GlobalContext";

export const CartContext=createContext();
const CartPage=()=>{
    const {state,dispatch}=useContext(GlobalContext);
    const [addressToDeliver,setAddressToDeliver]=useState(state.addresses?state.addresses[0]:"");

    useEffect(()=>{
        if(!state.isLoggedIn){
            dispatch({type:"show-cart-disable"});
        }
        else
            dispatch({type:"show-cart-enable"});
    },[state.showCart]);
    return(
        <div style={{backgroundColor:"#EEEEEE", display:"flex", height:"auto", padding:"20px", justifyContent:"space-between"}}>
            <CartContext.Provider value={[addressToDeliver,setAddressToDeliver]}>
                <CartProducts/>
                {state.cart!==0?<CartAmount/>:""}
            </CartContext.Provider>
            
        </div>
        
    )
}
export default CartPage;