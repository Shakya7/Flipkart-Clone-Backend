import React, {useEffect, useContext} from "react"
import axios from "axios";
import { Outlet } from "react-router-dom";
import logo from "../images/flipkart_logo.png";
import cart_logo from "../images/cart_logo.png";
import search_icon from "../images/search_icon.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";



export const Navbar=()=>{
    const {state, dispatch}=useContext(GlobalContext);
    const navigation=useNavigate();
    return(
        <div>
            <div style={{backgroundColor:"#0033C7",width:"100%",height:"9vh", display:"flex",justifyContent:"space-around"}}>
                <img onClick={(e)=>{
                    dispatch({type:"initial"});
                    navigation("/");
                }} style={{height:"6vmin",alignSelf:"center",position:"relative",left:"7%",cursor:"pointer"}} src={logo}/>
                <div style={{display:"flex",alignItems:"center",width:"60vmax",height:"6vh",alignSelf:"center",position:"relative",left:"50px"}}>
                    <input style={{width:"75%",height:"6vh", alignSelf:"center", borderColor:"white", paddingLeft:"20px"}} type="text"/>
                    <div style={{width:"5%",height:"6vh",display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:"white",borderColor:"white"}}>
                        <img style={{width:"25px"}} src={search_icon}/>
                    </div>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <div style={{color:"white", fontWeight:"bold",cursor:"pointer"}}>
                        Shakya
                    </div>
                    <div style={{color:"white", fontWeight:"bold", marginLeft:"10vw",display:"flex",position:"relative",cursor:"pointer"}}>
                        <div style={{backgroundColor:"red",position:"absolute",top:"-5px",width:"20px",height:"20px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>{2}</div>
                        <img src={cart_logo} style={{width:"30px"}}/>
                        <div style={{alignSelf:"center"}}>Cart</div>
                    </div>
                </div>
                
            </div>
            <Outlet/>
        </div>

    )
}