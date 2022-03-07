import {Card} from "./Card";
import { useEffect,useContext,useLayoutEffect } from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import Categories from "./Categories";

const ItemsPage=()=>{
    const {state,dispatch}=useContext(GlobalContext);
    const func1=async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        dispatch({type:"load-data-initial",payload:results.data});
    }
    const func2=async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        dispatch({type:"load-data-women",payload:results.data.filter((el)=>el.category==="women's clothing")});
        console.log("Women's clothings");
    }
    const func3=async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        dispatch({type:"load-data-electronics",payload:results.data.filter((el)=>el.category==="electronics")});
        console.log("Electronics");
    }
    const func4=async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        dispatch({type:"load-data-jewelery",payload:results.data.filter((el)=>el.category==="jewelery")});
        console.log("Jewelery");
    }
    const func5=async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        dispatch({type:"load-data-men",payload:results.data.filter((el)=>el.category==="men's clothing")});
        console.log("Men's clothing");
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
        else if(state.category==="men's clothing")
            func5();
        console.log("-->HOMESCREEN-->"); 
    },[state.category]);
    return(
        <div style={{display:"flex",flexDirection:"column",width:"100%",backgroundColor:"#EEEEEE"}}>
            <Categories/>
            <div style={{width:"100%", height:"2vh",backgroundColor:"#CDE8F6"}}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{width:"20%",height:"80vmin",backgroundColor:"#21325E",alignSelf:"flex-start",marginLeft:"3%", marginTop:"10px", borderRadius:"4px", boxShadow:"5px 5px 8px #476072"}}>
                    
                </div>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr",gridGap:"15px", marginRight:"3%", marginTop:"10px"}}>
                {   state.results &&
                    state.results.map((el)=>{
                        return <Card key={el.id} element={el}/>
                    })
                }
                </div> 
        </div>
    </div>   
    )
}
export default ItemsPage;

