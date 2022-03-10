import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";
import delete_icon from "../images/delete_icon.png";
import { Rating } from "@mui/material";

function Wishlist(props){
    const {state,dispatch}=useContext(GlobalContext);
    const {item}=props;
    return(
        <div style={{display:'flex',borderStyle:"solid",borderColor:"#D1D1D1",borderWidth:"2px",minHeight:"6vmax",padding:"3%",gap:"2%",justifyContent:"space-between"}}>
            <div style={{display:"flex",gap:"2%"}}>
                <img className="wishlist-img" src={item.image}/>
                <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
                    <div>{item.title}</div>
                    <div style={{width:"15vmax", color:"white",backgroundColor:"green",borderRadius:"5px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                        <div>{item.rating.rate}</div>
                        <div>
                            <Rating defaultValue={item.rating.rate} precision={0.5} readOnly/>
                        </div>
                    </div>
                    <div style={{fontWeight:"bold",fontSize:"1.4rem"}}>₹ {(item.price).toFixed(2)}</div>

                </div>
            </div>
            <img onClick={async e=>{
                await dispatch({type:"remove-from-wishlist",payload:item});
                await dispatch({type:"add-wishlist-to-DB"});
            }} className="delete-icon" src={delete_icon}/>

        </div>
    )
}
export default Wishlist;