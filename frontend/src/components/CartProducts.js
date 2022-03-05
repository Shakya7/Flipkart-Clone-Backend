import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";
import cart_empty from "../images/cart_empty_pic.png";

export default function CartProducts(){
    const {state,dispatch}=useContext(GlobalContext);
    const navigation=useNavigate();

    useEffect((e)=>{
        console.log("HMMM");
    },[state.cartProducts])

    console.log(state.cartProducts);
    
    return(
        <div className={state.cart!==0?"not-full":"full"} style={{backgroundColor:"white", display:"flex",flexDirection:"column", height:"auto",boxShadow:"5px 5px 5px grey", borderColor:"grey", borderStyle:"solid", borderWidth:"1px"}}>
            <header style={{width:"100%",display:"flex",backgroundColor:"white", justifyContent:"space-between", height:"11vmin", padding:"10px", borderRadius:"4px"}}>
                <div style={{width:"50%",fontWeight:"bolder", letterSpacing:".02em", fontSize:"1.4rem", alignSelf:"center", marginLeft:"10px"}}>
                    My Cart {state.isLoggedIn?<span>({state.cart})</span>:""}
                </div>
                {state.cart!==0?<div style={{width:"50%",maxHeight:"inherit",display:"flex",justifyItems:"flex-end", alignItems:"center"}}>
                    <span style={{fontWeight:"normal",fontSize:"1rem",color:"grey"}}>Deliver to</span>
                    <input style={{height:"70%", paddingLeft:"7px",  width:"70%", position:"relative",left:"20px",margnRight:"10px",flexShrink:"2px"}} type="text"></input>
                </div>:""}
            </header>
            <hr/>
            <div>
            {
            state.cartProducts && state.cartProducts.map((el,i)=>{
            
                return(
                <div key={i}>
                    <div className="container-cart-product">
                        <div style={{display:"flex",height:"auto"}}>     
                            <img style={{width:"10vmax",height:"20vmin"}} src={el.image}/>
                            <div style={{paddingLeft:"30px", position:"relative"}}>
                                <div>{el.title}</div>
                                <br/>
                                <div style={{fontWeight:"bold",fontSize:"1.4rem"}}>₹ {(el.price*Number(el.quantity)).toFixed(2)}</div>
                                <div style={{display:"flex",justifyContent:"flex-start", position:"relative", bottom:"-20px"}}>
                                    <div style={{display:"flex", justifyContent:"flex-start",alignItems:"center",gap:"10px"}}>
                                        <div className={el.quantity===1?"qnt-bttn abc":"qnt-bttn"} onClick={()=>{
                                            dispatch({type:"subtract-quantity",payload:el.id});
                                            dispatch({type:"add-to-cart-DB"});
                                        }}>-</div>
                                        <input className="input-fields" style={{width:"30px",height:"36px",textAlign:"center"}} value={el.quantity} onChange={(e)=>{
                                            dispatch({type:"add-quantity-input",qty:e.target.value,payload:el.id});
                                            dispatch({type:"add-to-cart-DB"});
                                        }}/>
                                        <div className="qnt-bttn" onClick={()=>{
                                            dispatch({type:"add-quantity",payload:el.id});
                                            dispatch({type:"add-to-cart-DB"});
                                        }}>+</div>
                                    </div>
                                    <button style={{marginLeft:"50px",padding:"10px",backgroundColor:"#DD4A48", color:"white",border:"none", borderRadius:"5px", boxShadow:"3px 3px 5px grey"}} onClick={(e)=>{
                                        dispatch({type:"remove-from-cart",payload:el});
                                        dispatch({type:"add-to-cart-DB"});
                                    }}>REMOVE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                )})
            }
            </div>
            <div>
            {
                !state.cart &&
                <div style={{height:"auto", display:"flex", alignItems:"center", justifyContent:"center",textAlign:"center",flexDirection:"column",padding:"20px"}}>
                    <img src={cart_empty} style={{marginBottom:"10px"}}/>
                    {state.isLoggedIn?<p>Your cart is empty!</p>:<p>Missing Cart items?</p>}
                    <br/>
                    {state.isLoggedIn?<div style={{fontSize:"0.8rem"}}>Add items to it now</div>:<div style={{fontSize:"0.8rem"}}>Login to see the items you added previously</div>}
                    <br/>
                    {state.isLoggedIn?<div onClick={(e)=>{
                        navigation("/");
                        dispatch({type:"initial"});
                        }} style={{backgroundColor:"#0033C7", color:"white",width:"15%",height:"5vmin",display:"flex",justifyContent:"center",alignItems:"center", borderRadius:"5px", cursor:"pointer"}}
                        >
                            SHOP NOW
                    </div>:
                    <div onClick={(e)=>{
                        navigation("../login");
                        }} style={{backgroundColor:"#fb7a1b", color:"white",width:"15%",height:"5vmin",display:"flex",justifyContent:"center",alignItems:"center", borderRadius:"5px", cursor:"pointer"}}>
                        Login
                    </div>
                    }
                </div>
            }
            </div>
        </div>
    )
}