import { useReducer, createContext } from "react";

const initialState={
    results:null,
    category:""
}
const reducerF=(currState, action)=>{
    switch(action.type){
        case "load-data":

        case "initial":
            return initialState

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
