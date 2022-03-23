import { useReducer, createContext, useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


const initialState={
    results:null,
    cart:0,
    category:"init",
    cartProducts:[],
    userProfile:null,
    isLoggedIn:false,
    showCart:true,
    addresses:[],
    wishlist:[],
    billingAddress:"",
    billingProducts:[],
    finalPrice:1,
    searchTerm:"",
}

const reducerF=(currState, action)=>{
    const helperFunc1=()=>currState.cart;
    
    switch(action.type){
        case "connect-to-db":
            return currState

        case "null-category":
            return{
                ...currState,
                category:null
            }
        case "finally-update-data-from-db":
            return{
                ...currState,
                userProfile:action.payload,
                cartProducts:action.payload.cart,
                cart:action.payload.cart.length,  
                addresses:action.payload.addresses,
                wishlist:action.payload.wishlist
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
        case "load-search-data":
            return{
                ...currState,
                results:action.payload
            }


        case "initial":
            return{
                ...currState,
                category:"init"
            }
        case "price-asc":
            return{
                ...currState,
                category:"price-asc"
            }
        case "price-desc":
            return{
                ...currState,
                category:"price-desc"
            }

        case "search":
            return{
                ...currState,
                category:"search"
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

        case "search-term":{
            return{
                ...currState,
                searchTerm:action.payload
            }
        }
        
        case "add-to-cart":
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

        case "signup":
            return{
                ...currState,
                userProfile:action.payload,
                isLoggedIn:true
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
        case "add-address":
            return{
               ...currState,
               addresses:[...currState.addresses,action.payload]
            }

        case "add-address-to-DB":
            axios.patch("http://localhost:4001/api/v1/users/add-address",
            {addresses:[...currState.addresses]},{withCredentials:true}).then(
            (res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err.message)
            })
            return currState;   
        case "delete-address":
            return{
                ...currState,
                addresses:[...currState.addresses.filter((el)=>el!==action.payload)]
            }
        case "update-address":
            const index4=currState.addresses.findIndex(el=>el===action.actualValue);
            currState.addresses.splice(index4,1,action.payload);
            //console.log(currState.addresses);
            return currState;
        case "add-to-wishlist":
            return{
                ...currState,
                wishlist:[...currState.wishlist,action.payload]
            }

        case "remove-from-wishlist":
            //const num=currState.wishlist.filter((el)=>el.id===action.payload.id).length;
            return{
                ...currState,
                wishlist:[...currState.wishlist.filter((el)=>el.id!==action.payload.id)]
            }

        case "add-wishlist-to-DB":
            axios.patch("http://localhost:4001/api/v1/users/add-wishlist",
            {wishlist:[...currState.wishlist]},{withCredentials:true}).then(
            (res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err.message)
            })
            return currState;

        case "final-money":
            return{
                ...currState,
                finalPrice:action.payload
            }
        
        case "address-selected":
            return{
                ...currState,
                billingAddress:action.payload
            }

        case "sort-asc":
            return{
                ...currState,
                results:action.payload
            }
        case "sort-desc":
            return{
                ...currState,
                results:action.payload
            }
    }
}

export const ProfileContext=createContext();
export const GlobalContext=createContext();

export const GlobalProvider=(props)=>{
    const [state,dispatch]=useReducer(reducerF,initialState);
    const location=useLocation();
    const [accountPage,setAccountPage]=useState(location.pathname==="/profile"?"profile-info":location.pathname==="/profile/addresses"?"addresses-info":location.pathname==="/profile/wishlist"?"wishlist-info":location.pathname==="/cart"?"cart-view":"");

    const loadFromDB=async e=>{
        const userData=await axios.get("http://localhost:4001/api/v1/users/load-data",{
            withCredentials:true
        });
        if(!userData.data.data.user){
            dispatch({type:"load-data-initial"});
            dispatch({type:"logout"});
        }
        else{    
            console.log("State",state);
            console.log("Coming from LOAD-DATA-FROM-DB ->",userData.data.data.user);
            //console.log(userData.data.data);
            //console.log(state.connectionToDBNumber);
            dispatch({type:"finally-update-data-from-db",payload:userData.data.data.user});
            dispatch({type:"login",payload:userData.data.data.user});
        }
    }

    useEffect(()=>{
        loadFromDB();

    },[state.showCart,accountPage]);

    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            <ProfileContext.Provider value={[accountPage,setAccountPage]}>
                {
                    props.children
                }
            </ProfileContext.Provider>
            
        </GlobalContext.Provider>
    )
}
