import {Card} from "./Card";
import { useEffect, useState,useContext } from "react";
import axios from "axios";
import cat_2 from "../images/electronics_cat.jpg"
import cat_1 from "../images/fashion_cat.jpg";
import cat_3 from "../images/jewelery_cat.jpg";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";

const ItemsPage=()=>{
    const {state,dispatch}=useContext(GlobalContext);
    const [results,setProducts]=useState(null);
    //const navigation=useNavigate();
    const func1=async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        setProducts(results.data);
    }
    const func2=async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        setProducts(results.data.filter((el)=>el.category==="women's clothing"));
        console.log("Women's clothings");
    }
    const func3=async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        setProducts(results.data.filter((el)=>el.category==="electronics"));
        console.log("Electronics");
    }
    const func4=async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        setProducts(results.data.filter((el)=>el.category==="jewelery"));
        console.log("Jewelery");
    }

    useEffect(()=>{
        if(state.category==="")
            func1();
        else if(state.category==="women's clothing")
            func2();
        else if(state.category==="electronics")
            func3();
        else if(state.category==="jewelery")
            func4();
        console.log("OKAY!!"); 
    },[state.category]);
    
    const categories=["Fashion", "Electronics", "Jewelery"]
    
    return(
        <div style={{display:"flex",flexDirection:"column",width:"100%",backgroundColor:"#EEEEEE"}}>
            <div style={{width:"100%",height:"auto",backgroundColor:"white"}}>
                <div style={{display:"flex", justifyContent:"space-around",margin:"10px"}}>
                    <div className="fashion" onClick={(e)=>{
                        dispatch({type:"women's clothing"})
                    }}>
                        <img className="category_img" src={cat_1}/>
                        <p style={{textAlign:"center"}}>{categories[0]}</p>
                    </div>
                    <div className="fashion" onClick={(e)=>{
                        dispatch({type:"electronics"})
                    }}>
                        <img className="category_img" src={cat_2}/>
                        <p style={{textAlign:"center"}}>{categories[1]}</p>
                    </div>
                    <div className="fashion" onClick={(e)=>{
                        dispatch({type:"jewelery"})
                    }}>
                        <img className="category_img" src={cat_3}/>
                        <p style={{textAlign:"center"}}>{categories[2]}</p>
                    </div>
                </div>
            </div>
            <div style={{width:"100%", height:"2vh",backgroundColor:"#CDE8F6"}}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{width:"20%",height:"80vmin",backgroundColor:"#21325E",alignSelf:"flex-start",marginLeft:"3%", marginTop:"10px", borderRadius:"4px", boxShadow:"5px 5px 8px #476072"}}>
                    
                </div>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr",gridGap:"15px", marginRight:"3%", marginTop:"10px"}}>
                {   results &&
                    results.map((el)=>{
                        return <Card key={el.id} element={el}/>
                    })
                }
                </div> 
        </div>
    </div>   
    )
}
export default ItemsPage;

