import React, {useEffect, useContext, useLayoutEffect} from "react"
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
    useLayoutEffect(()=>{
        console.log("Added to cart!!!!!!");
        console.log(state.cart);
    },[state.cart])
    return(
        <div>
            <div style={{backgroundColor:"#2874f0",width:"100%",height:"9vh", display:"flex",justifyContent:"space-around", position:"sticky",top:0,marginTop:0,zIndex:1}}>
                <img onClick={(e)=>{
                    dispatch({type:"initial"});
                    navigation("/");
                }} style={{height:"6vmin",alignSelf:"center",position:"relative",left:"7%",cursor:"pointer"}} src={logo}/>
                <div style={{display:"flex",alignItems:"center",width:"60vmax",height:"6vh",alignSelf:"center",position:"relative",left:"50px"}}>
                    <input style={{width:"75%",height:"6vh", alignSelf:"center", borderColor:"white", paddingLeft:"20px"}} type="text" placeholder="Search for products, brands and more"/>
                    <div style={{width:"5%",height:"6vh",display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:"white",borderColor:"white"}}>
                        <img style={{width:"25px"}} src={search_icon}/>
                    </div>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <div style={{color:"white", fontWeight:"bold",cursor:"pointer"}}>
                        Shakya
                    </div>
                    <div onClick={(e)=>{
                        navigation("/cart")
                    }} style={{color:"white", fontWeight:"bold", marginLeft:"10vw",display:"flex",position:"relative",cursor:"pointer"}}>
                        <div style={{backgroundColor:"red",position:"absolute",top:"-5px",width:"20px",height:"20px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>{state.cart}</div>
                        <img src={cart_logo} style={{width:"30px"}}/>
                        <div style={{alignSelf:"center"}}>Cart</div>
                    </div>
                </div>
                
            </div>
            <Outlet/>
        </div>

    )
}