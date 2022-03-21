import { GlobalContext } from "./GlobalContext";
import { useContext,useEffect } from "react";

function OrderBlocks(props){

    const {state,dispatch}=useContext(GlobalContext);
    console.log("OrderBlocks console.log -->",props.item);
    return(
        <div style={{width:"100%",height:"80px", backgroundColor:"white"}}>
            
                <p>{props.item.address}</p>  
                <p>{props.item.price}</p>  
                <p>Payment done on {props.item.paymentDate}</p>
        </div>
    )
}
export default OrderBlocks;