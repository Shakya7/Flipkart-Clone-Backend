import {useLocation, useNavigate } from "react-router-dom"
import { GlobalContext } from "./GlobalContext";
import { useContext, useEffect, useLayoutEffect,useState } from "react";
import Categories from "./Categories";
import { Rating } from "@mui/material";
import cart_logo from "../images/cart_logo.png";


export const SingleItemPage=(props)=>{
    const {state,dispatch}=useContext(GlobalContext);
    const navigation=useNavigate();
    const location=useLocation();
    console.log(location.state);

    return(
        <div style={{display:"flex",flexDirection:"column",width:"100%",backgroundColor:"#EEEEEE",height:"auto"}}>
            <Categories/>
            <div style={{width:"100%", height:"2vh",backgroundColor:"#CDE8F6"}}/>
            <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",padding:"20px"}}>
                <div style={{width:"45%",height:"60vmin", borderRadius:"5px", boxShadow:"4px 4px 5px grey",display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",backgroundColor:"white", padding:"20px"}}>
                    <img style={{width:"80%",height:"80%", borderRadius:"5px"}} src={location.state.image}/>
                    {
                    state.cartProducts.find(el=>el.title===location.state.title)?
                    <div onClick={()=>navigation("/cart")} style={{width:"30%",height:"20%",display:"flex",justifyContent:"center", backgroundColor:"#357C3C", marginTop:"30px", cursor:"pointer", color:"white", borderRadius:"5px", boxShadow:"3px 3px 6px grey"}}>
                        <img src={cart_logo} style={{width:"30px"}}/>
                        <div style={{alignSelf:"center"}}>GO TO CART</div>
                    </div>:
                    <div onClick={(e)=>{
                        if(state.isLoggedIn){
                            dispatch({type:"add-to-cart",payload:location.state});
                            dispatch({type:"add-to-cart-DB"});
                            navigation("/cart");
                        }
                        else{
                            navigation("/login");
                        }
                    }}
                    style={{width:"30%",height:"20%",display:"flex",justifyContent:"center", backgroundColor:"#F6830F", marginTop:"30px", cursor:"pointer", color:"white", borderRadius:"5px", boxShadow:"3px 3px 6px grey"}}>
                        <img src={cart_logo} style={{width:"30px"}}/>
                        <div style={{alignSelf:"center"}}>ADD TO CART</div>
                    </div>
                    }
                </div>
                <div style={{width:"53%",minHeight:"60vmin", borderRadius:"5px", boxShadow:"4px 4px 5px grey",backgroundColor:"white"}}>
                    <div style={{padding:"30px"}}>
                        <p style={{fontWeight:"lighter",fontSize:"1.5em"}}>{location.state.title}</p>
                        <div style={{marginTop:"25px",width:"15vmax", color:"white",backgroundColor:"green",borderRadius:"5px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                            <div>{location.state.rating.rate}</div>
                            <div>
                                <Rating defaultValue={location.state.rating.rate} precision={0.5} readOnly/>
                            </div>
                        </div>
                        <p style={{marginTop:"25px",fontWeight:"bolder",fontSize:"1.5em"}}>₹{location.state.price}</p>
                        <div>
                            <p style={{marginTop:"25px",fontWeight:"normal",fontSize:"1.5em"}}><span style={{fontWeight:"bolder"}}>Description: </span>{location.state.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}