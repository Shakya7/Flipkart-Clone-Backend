import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export function ChangePassModal(props){
    const [passwordFields,setPasswordFields]=useState({
        currPassword:"",
        newPassword:"",
        confirmNewPassword:""
    })

    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div onClick={e=>props.closeModal(false)} style={{position:"absolute", top:20,right:20, fontSize:"1.5rem",cursor:"pointer"}}>X</div>
                <div style={{width:"30%", overflowWrap:"break-word"}}>
                    <p><b>Your new password must:</b></p>
                    <br/>
                    <div>
                        <ul style={{fontSize:"0.8rem"}}>
                            <li>Be at least 4 characters in length</li>
                            <br/>
                            <li>Not be same as your current password</li>
                            <br/>
                            <li>Not contain common passwords.</li>
                        </ul>
                    </div>
                </div>
                <div style={{width:"60%"}}>
                    <h3>Change Password</h3>
                    <div style={{marginTop:20,display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:"20px"}}>
                        <div>
                            <input className="reset-pw-inp" type="password" placeholder="Type current password" onChange={e=>{
                                setPasswordFields({
                                    ...passwordFields,
                                    currPassword:e.target.value
                                })
                            }}/>
                        </div>
                        <div>
                            <input className="reset-pw-inp" type="password" placeholder="Type new password" onChange={e=>{
                                setPasswordFields({
                                    ...passwordFields,
                                    newPassword:e.target.value
                                })
                            }}/>
                        </div>
                        <div>
                            <input className="reset-pw-inp" type="password" placeholder="Retype new password" onChange={e=>{
                                setPasswordFields({
                                    ...passwordFields,
                                    confirmNewPassword:e.target.value
                                })
                            }}/>
                        </div>
                        <div onClick={async e=>{
                            await axios.patch("http://localhost:4001/api/v1/users/updatePassword",{
                                currentPassword:passwordFields.currPassword,
                                password:passwordFields.newPassword,
                                confirmPassword:passwordFields.confirmNewPassword
                            },{withCredentials:true});
                            props.closeModal(false);
                            window.location.reload(true);

                        }} style={{width:"25vmax",height:"7vmin", backgroundColor:"#2874f0",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",cursor:"pointer"}}>CHANGE PASSWORD</div>
                    </div>
                </div>
            </div>
        </div>
    )
}