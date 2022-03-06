import Categories from "./Categories";
import { GlobalContext } from "./GlobalContext";
import { useContext,useEffect } from "react";
import search_icon from "../images/search_icon.png"

function Orders(){
    return(
        <div>
            <Categories/>
            <div style={{width:"100%",height:"auto", backgroundColor:"#EEEEEE",display:"flex", gap:"2%",alignItems:"flex-start",justifyContent:"center",paddingTop:'20px',paddingBottom:'20px'}}>
                <div style={{minWidth:"20%", backgroundColor:"#21325E",height:"200px"}}>
                    
                </div>
                <div style={{width:"65%", backgroundColor:"#EEEEEE",height:"200px",display:"flex",flexDirection:"column",gap:"10%"}}>
                    <div style={{display:"flex"}}>
                        <input style={{width:"80%",height:"3vmax", borderRadius:"5px 0 0 5px", paddingLeft:"2%",borderColor:"#D1D1D1"}} type="text"/>
                        <div style={{backgroundColor:"blue",display:"flex",justifyContent:"space-evenly",alignItems:"center", padding:"5px", color:"white",fontSize:"0.8rem",fontWeight:"bold",width:"20%",gap:"5%",borderRadius:"0 5px 5px 0",cursor:"pointer"}}>
                            <img  width={"20px"} src={search_icon}/>
                            <p>Search orders</p>
                        </div>
                    </div>
                    <div style={{width:"100%",height:"80px", backgroundColor:"white"}}>Hello</div>
                    <div style={{width:"100%",height:"80px",backgroundColor:"white"}}>Hi</div>
                </div>
            </div>
        </div>
    )
}
export default Orders;