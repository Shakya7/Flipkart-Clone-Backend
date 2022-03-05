import { useContext, useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import Categories from "./Categories";
import axios from "axios";


//	https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png
function Login(props){
    const {state,dispatch}=useContext(GlobalContext);
    const [inputState,setInputState]=useState({
        email:"",
        password:"",
    });
    useEffect(()=>{
        dispatch({type:"show-cart-enable"});
        console.log(inputState);
    },[inputState]);
    const navigation=useNavigate();
    const loginFunction=async()=>{
        try{
        const user= await axios.post("http://localhost:4001/api/v1/users/login",{
            email:inputState.email,
            password:inputState.password,
        },{withCredentials:true})
        console.log(user.data.data);
        return user.data.data;
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div>
            <Categories/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"auto",backgroundColor:"#EEEEEE",padding:"50px"}}>
                <div style={{display:"flex",boxShadow:"4px 4px 6px grey",width:"53vmax",height:"auto"}}>
                    <div style={{width:"23vmax",height:"35vmax",backgroundColor:"#2874f0",padding:"20px",paddingTop:"30px",paddingLeft:"15px",display:"flex",flexDirection:"column"}}>
                        <div style={{fontSize:"1.8rem",color:"white"}}>Login</div>
                        <br/>
                        <br/>
                        <div style={{fontSize:"1rem",color:"white"}}>Get access to your Orders, Wishlist and Recommendations</div>
                        <div style={{display:"flex",justifyContent:"center",marginTop:"50%"}}>
                            <img style={{width:"auto"}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"/>
                        </div>
                    </div>
                    <div style={{width:"30vmax",height:"35vmax",backgroundColor:"white",padding:"25px",paddingTop:"30px",paddingLeft:"15px",display:"flex",flexDirection:"column"}}>
                        <form style={{display:"flex",flexDirection:"column"}}>
                            <input value={inputState.email} onChange={e=>setInputState({
                                ...inputState,
                                email:e.target.value
                            })} placeholder="Enter email/ phone number" className="login-input" style={{borderTop:"none",borderLeft:"none",borderRight:"none",padding:"20px"}} type="text"/>
                            <br/>
                            <input value={inputState.password} onChange={e=>setInputState({
                                ...inputState,
                                password:e.target.value
                            })} placeholder="Enter password" className="login-input" style={{borderTop:"none",borderLeft:"none",borderRight:"none",padding:"20px"}} type="password"/>
                            <br/>
                            <br/>
                            <div style={{display:"flex",flexDirection:"column",marginTop:"5%"}}>
                                <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10%"}} onClick={
                                    async e=>{
                                        const user=await loginFunction();
                                        console.log("Coming from LOGIN ->",user.user);
                                        dispatch({type:"connect-to-db"});
                                        dispatch({type:"login",payload:user.user});
                                        navigation("/");
                                    }
                                }>
                                    <div style={{width:"60%",backgroundColor:"#fb641b",padding:"20px",textAlign:"center",color:"white",cursor:"pointer"}}>Login</div>
                                </div>
                            </div>
                            <br/>
                            <div onClick={
                                e=>navigation("/signup")
                            } style={{display:"flex",justifyContent:"center",alignItems:"center", color:"#2874f0",marginTop:"50px",cursor:"pointer"}}>
                                New to Flipkart? Create an account
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;