import {Card} from "./Card";
import { useEffect,useContext,useLayoutEffect, useCallback} from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import Categories from "./Categories";
import FilterBar from "./FilterBar";

const ItemsPage=()=>{
    const {state,dispatch}=useContext(GlobalContext);
    
    const func1=useCallback(async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        dispatch({type:"load-data-initial",payload:results.data});
        console.log("Home ALL -->",state);
        dispatch({type:"null-category"});
    },[state.results]);
    const func2=useCallback(async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        dispatch({type:"load-data-women",payload:results.data.filter((el)=>el.category==="women's clothing")});
        console.log("Women's clothings");
        console.log("Women--->",state);
        dispatch({type:"null-category"});
    },[state.results]);
    const func3=useCallback(async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        dispatch({type:"load-data-electronics",payload:results.data.filter((el)=>el.category==="electronics")});
        console.log("Electronics");
        console.log("Electronics--->",state);
        dispatch({type:"null-category"});
    },[state.results]);
    const func4=useCallback(async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        dispatch({type:"load-data-jewelery",payload:results.data.filter((el)=>el.category==="jewelery")});
        console.log("Jewelery");
        console.log("Jewelery--->",state);
        dispatch({type:"null-category"});
    },[state.results]);
    const func5=useCallback(async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        dispatch({type:"load-data-men",payload:results.data.filter((el)=>el.category==="men's clothing")});
        console.log("Men's clothing");
        console.log("Men--->",state);
        dispatch({type:"null-category"});
    },[state.results]);
    const func6=useCallback(async()=>{
        const results=await axios.get("https://fakestoreapi.com/products");
        dispatch({type:"load-search-data",payload:results.data.filter((el)=>el.title.includes(state.searchTerm))});
        console.log("Search --->",state);
        dispatch({type:"null-category"});
    },[state.results]);
    const funcPriceAsc=(()=>{
        //console.log(state.results);
        dispatch({type:"sort-asc",payload:state.results.sort((a,b)=>parseFloat(a.price)-parseFloat(b.price))})
    });
    const funcPriceDesc=(()=>{
        //console.log(state.results);
        dispatch({type:"sort-desc",payload:state.results.sort((a,b)=>parseFloat(b.price)-parseFloat(a.price))})
    });
    useEffect(()=>{

    },[])

    useEffect(useCallback(()=>{
        if(state.category==="init")
            func1();
        if(state.category==="women's clothing")
            func2();
        if(state.category==="electronics")
            func3();
        if(state.category==="jewelery")
            func4();
        if(state.category==="men's clothing")
            func5();
        if(state.category==="search")
            func6();
        if(state.category==="price-asc")
            funcPriceAsc();
        if(state.category==="price-desc")
            funcPriceDesc();

        console.log("-->HOMESCREEN-->");
        console.log("TEST -->",state.filterCat) 
    },[state.results,state.category]),[state.results,state.category]);
    return(
        <div style={{display:"flex",flexDirection:"column",width:"100%",backgroundColor:"#EEEEEE"}}>
            <Categories/>
            <div style={{width:"100%", height:"2vh",backgroundColor:"#CDE8F6"}}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{width:"20%",height:"80vmin",backgroundColor:"#21325E",alignSelf:"flex-start",marginLeft:"3%", marginTop:"10px", borderRadius:"4px", boxShadow:"5px 5px 8px #476072"}}>
                    <FilterBar/>
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

