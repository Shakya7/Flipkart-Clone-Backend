import { useReducer, createContext, useEffect } from "react";
import axios from "axios";


const initialState={
    results:null,
    cart:0,
    category:"",
    cartProducts:[],
    userProfile:null,
    isLoggedIn:false,
    connectionToDBNumber:0,
    showCart:true

}

const reducerF=(currState, action)=>{
    const helperFunc1=()=>currState.cart;
    
    switch(action.type){
        case "connect-to-db":
            return{
                ...currState,
                connectionToDBNumber:currState.connectionToDBNumber+1
            }

        case "finally-update-data-from-db":
            return{
                ...currState,
                userProfile:action.payload,
                cartProducts:action.payload.cart,
                cart:action.payload.cart.length,  
            }
        case "load-data-initial":
            return{
                ...currState,
                results:action.payload
            }
        case "load-data-women":
            return{
                ...currState,
                results:action.payload
            }
        case "load-data-men":
            return{
                ...currState,
                results:action.payload
            }
        case "load-data-electronics":
            return{
                ...currState,
                results:action.payload
            }
        case "load-data-jewelery":
            return{
                ...currState,
                results:action.payload
            }
        case "initial":
            return{
                ...currState,
                category:""
            }

        case "women's clothing":
            return{
                ...currState,
                category:"women's clothing"
            }
        case "men's clothing":
            return{
                ...currState,
                category:"men's clothing"
            }
        case "electronics":
            return{
                ...currState,
                category:"electronics"
            }
        case "jewelery":{
            return{
                ...currState,
                category:"jewelery"
            }
        }
        
        case "add-to-cart":
            //const userDetails=await getValue();
            //console.log(userDetails);
            return{
                ...currState,
                cart:helperFunc1()+1,
                cartProducts:[...currState.cartProducts,{...action.payload,quantity: 1}]
            }
        case "add-to-cart-DB":
            console.log("checking ...",[...currState.cartProducts]);
            axios.patch("http://localhost:4001/api/v1/users/add-to-cart",{cart:[...currState.cartProducts]},{withCredentials:true}).then(
            (res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err.message)
            })
            return currState;
            
        case "remove-from-cart":
            const number=currState.cartProducts.filter((el)=>el.id===action.payload.id).length;
            return{
                ...currState,
                cart:helperFunc1()-number,
                cartProducts:[...currState.cartProducts.filter((el)=>el.id!==action.payload.id)]
                
            }
        case "add-quantity":
            const index=currState.cartProducts.findIndex(el=>el.id===action.payload);
            const updatedProducts=[...currState.cartProducts];
            updatedProducts[index]={...updatedProducts[index],quantity:Number(updatedProducts[index].quantity)+1}

            return{
                ...currState,
                //cartProducts:[...currState.cartProducts,{...action.payload,quantity:action.payload.quantity+1}]
                //cartProducts:[...currState.cartProducts.filter((el)=>el.id===action.payload.id),updatedObj]
                cartProducts:updatedProducts
            }
        case "subtract-quantity":
            const index3=currState.cartProducts.findIndex(el=>el.id===action.payload);
            const updatedProducts3=[...currState.cartProducts];
            updatedProducts3[index3]={...updatedProducts3[index3],quantity:Number(updatedProducts3[index3].quantity)-1}
            return{
                ...currState,
                cartProducts:updatedProducts3
            }

        case "add-quantity-input":
            const index2=currState.cartProducts.findIndex(el=>el.id===action.payload);
            const updatedProducts2=[...currState.cartProducts];
            updatedProducts2[index2]={...updatedProducts2[index2],quantity:action.qty}
            return{
                ...currState,
                cartProducts:updatedProducts2
            }
        case "login":
            return{
                ...currState,
                userProfile:action.payload,
                isLoggedIn:true
            }
        case "logout":
            return{
                ...currState,
                userProfile:null,
                isLoggedIn:false
            }
        case "show-cart-disable":
            return{
                ...currState,
                showCart:false,
            }
        case "show-cart-enable":
            return{
                ...currState,
                showCart:true,
            }
    }
}

export const GlobalContext=createContext();

export const GlobalProvider=(props)=>{
    const [state,dispatch]=useReducer(reducerF,initialState);
    useEffect(()=>{
        const loadFromDB=async e=>{
            const userData=await axios.get("http://localhost:4001/api/v1/users/load-data",{
                withCredentials:true
            });
            if(!userData.data.data.user){
                dispatch({type:"load-data-initial"});
                dispatch({type:"logout"});
            }
            else{    
                console.log("Coming from LOAD-DATA-FROM-DB ->",userData.data.data.user);
                console.log(userData.data.data);
                console.log(state.connectionToDBNumber);
                dispatch({type:"finally-update-data-from-db",payload:userData.data.data.user});
            }
        }
        loadFromDB();

    },[state.connectionToDBNumber])
    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            {
                props.children
            }
        </GlobalContext.Provider>
    )
}
