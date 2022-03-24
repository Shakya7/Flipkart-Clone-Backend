import { useState,useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function FilterBar(){
    const {state,dispatch}=useContext(GlobalContext);
    return(
        <div style={{display:"flex",flexDirection:"column"}}>
            <div className="filter-header">Filters</div>
            <div className="hr-line"/>
            <div className="filter-price">
                <p className="heading-sub-filter">PRICE</p>
                <div style={{marginTop:"10px"}}>
                    <p>Sort by:</p>
                    <div>
                        <div>   
                            <input onChange={e=>{
                                dispatch({type:e.target.value});
                                
                            }} type="radio" value="price-asc" checked={state.category==="price-asc"} name="price-sort"/>
                            <label style={{fontSize:"1rem",margin:"10px"}}>Low to High</label>
                        </div>
                        <div>
                            <input onChange={e=>{
                                dispatch({type:e.target.value});
                                
                            }} type="radio" value="price-desc" checked={state.category==="price-desc"} name="price-sort"/>
                            <label style={{fontSize:"1rem",margin:"10px"}}>High to Low</label>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"10px"}}>
                    <input type="range"/>
                </div>
            </div>
            <div className="hr-line"/>
            <div className="filter-rating">
                <p className="heading-sub-filter">RATINGS</p>
                <div style={{marginTop:"10px"}}>
                    <div>
                        <input type="radio" name="rating"/>
                        <label style={{fontSize:"1rem",margin:"10px"}}>4★ & above</label>
                    </div>
                    <div>
                        <input type="radio" name="rating"/>
                        <label style={{fontSize:"1rem",margin:"10px"}}>3★ & above</label>
                    </div>
                    <div>
                        <input type="radio" name="rating"/>
                        <label style={{fontSize:"1rem",margin:"10px"}}>2★ & above</label>
                    </div>
                    <div>
                        <input type="radio" name="rating"/>
                        <label style={{fontSize:"1rem",margin:"10px"}}>1★ & above</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterBar;