import { useEffect,useContext } from "react";
import CartAmount from "./CartAmount";
import CartProducts from "./CartProducts";
import { GlobalContext } from "./GlobalContext";

 
const CartPage=(props)=>{
    const {state,dispatch}=useContext(GlobalContext);
    console.log("CARTPAGE---> STATE IS :",state);
    useEffect(()=>{
        if(!state.isLoggedIn){
            dispatch({type:"show-cart-disable"});
        }
        else
            dispatch({type:"show-cart-enable"});
    },[state.showCart,state.isLoggedIn]);
    return(
        <div style={{backgroundColor:"#EEEEEE", display:"flex", height:"auto", padding:"20px", justifyContent:"space-between"}}>
            <CartProducts/>
            {state.cart!==0?<CartAmount handleP={props.paymentHandler}/>:""}
        </div>
        
    )
}
export default CartPage;