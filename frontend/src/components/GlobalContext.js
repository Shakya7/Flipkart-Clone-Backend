import { useReducer, createContext } from "react";


const initialState={
    results:null,
    cart:0,
    category:"",
    cartProducts:[],
    userProfile:null,
    isLoggedIn:false

}

const reducerF=(currState, action)=>{
    const helperFunc1=()=>currState.cart;
    
    switch(action.type){
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
            return{
                ...currState,
                cart:helperFunc1()+1,
                cartProducts:[...currState.cartProducts,{...action.payload,quantity: 1}]
            }
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
    }
}

export const GlobalContext=createContext();

export const GlobalProvider=(props)=>{
    const [state,dispatch]=useReducer(reducerF,initialState);
    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            {
                props.children
            }
        </GlobalContext.Provider>
    )
}
