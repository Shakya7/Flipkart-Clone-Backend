
import { useEffect, useState,useContext } from "react";
import CartAmount from "./CartAmount";
import CartProducts from "./CartProducts";
import { GlobalContext } from "./GlobalContext";

const CartPage=()=>{
    const {state}=useContext(GlobalContext);
    return(
        <div style={{backgroundColor:"#EEEEEE", display:"flex", height:"auto", padding:"20px", justifyContent:"space-between"}}>
            <CartProducts/>
            {state.cart!==0?<CartAmount/>:""}
            
        </div>
        
    )
}
export default CartPage;