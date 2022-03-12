import { useEffect, useState } from "react";
import axios from "axios";
import forgotp_email from "../../images/forgotpass_email_img.svg";
import email_sent from "../../images/email_sent.svg";

export function ForgotPassModal(props){
    const [forgotPOptins,setForgotPOptions]=useState({
        email:""
    })
    const [sendEmail,setSendEmail]=useState(false);
    useEffect(()=>{
        console.log(forgotPOptins)
    },[sendEmail]);
    return(
        <div className="modalBackground">
            {sendEmail?
            <div className="modalContainer" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div onClick={e=>props.closeModal(false)} style={{position:"absolute", top:20,right:20, fontSize:"1.5rem",cursor:"pointer"}}>X</div>
                <img style={{width:"60%",height:"50%"}} src={email_sent}/>
                <p style={{textAlign:"center"}}>Email has been sent successfully to your email! Do check the link for changing the password.</p>
                <p>Didn't receive the email? <span onClick={()=>{
                            axios.post("http://localhost:4001/api/v1/users/forgotPassword",{
                                email:forgotPOptins.email
                            },{withCredentials:true})
                            .then(res=>setSendEmail(true))
                            .catch(err=>console.log(err.message));
                        }} style={{color:"red",cursor:"pointer"}}>Resend</span></p>
            </div>:
            <div className="modalContainer" style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"space-between"}}>
                <div onClick={e=>props.closeModal(false)} style={{position:"absolute", top:20,right:20, fontSize:"1.5rem",cursor:"pointer"}}>X</div>
                <h2>Forgot your password?</h2>
                <p>No worries, we got you covered! Enter your registered email below, we'll send you a link there through which you can change your password easily.</p>
                <p style={{color:"#2874f0",cursor:"pointer"}}>Oh you remember? Great! Lets log in.</p>
                <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
                    <div>
                        <img style={{width:"20vmax",height:"40vmin"}} src={forgotp_email}/>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"20px",alignItems:"center"}}>
                        <div>
                            <input className="ip-highlight" type="email" placeholder="Type your email" onChange={e=>{
                                setForgotPOptions({
                                    ...forgotPOptins,
                                    email:e.target.value
                                })
                            }}/>
                        </div>
                        <div onClick={()=>{
                            axios.post("http://localhost:4001/api/v1/users/forgotPassword",{
                                email:forgotPOptins.email
                            },{withCredentials:true})
                            .then(res=>setSendEmail(true))
                            .catch(err=>console.log(err.message));
                        }} style={{backgroundColor:"#42C2FF",width:"8vmax",height:"8vmin",display:"flex",alignItems:"center",justifyContent:"center", borderRadius:"20px",fontSize:"1.3rem",fontWeight:"lighter",cursor:"pointer"}}>SEND</div>
                    </div> 
                </div>
            </div>
            }
        </div>
    )
}