import cat_2 from "../images/electronics_cat.jpg"
import cat_1 from "../images/fashion_cat.jpg";
import cat_3 from "../images/jewelery_cat.jpg";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";


const Categories=()=>{
    const {state,dispatch}=useContext(GlobalContext);
    const categories=["Fashion", "Electronics", "Jewelery"];
    const navigation=useNavigate();
    return(
        <div style={{width:"100%",height:"auto",backgroundColor:"white"}}>
                <div style={{display:"flex", justifyContent:"space-around",margin:"10px"}}>
                    <div className="fashion" onClick={(e)=>{
                        dispatch({type:"women's clothing"});
                        navigation("/");
                    }}>
                        <img className="category_img" src={cat_1}/>
                        <p style={{textAlign:"center"}}>{categories[0]}</p>
                    </div>
                    <div className="fashion" onClick={(e)=>{
                        dispatch({type:"electronics"});
                        navigation("/");
                    }}>
                        <img className="category_img" src={cat_2}/>
                        <p style={{textAlign:"center"}}>{categories[1]}</p>
                    </div>
                    <div className="fashion" onClick={(e)=>{
                        dispatch({type:"jewelery"});                      
                        navigation("/");
                    }}>
                        <img className="category_img" src={cat_3}/>
                        <p style={{textAlign:"center"}}>{categories[2]}</p>
                    </div>
                </div>
                <div style={{width:"100%", height:"2vh",backgroundColor:"#CDE8F6"}}/>
            </div>
            
    )
}
export default Categories;