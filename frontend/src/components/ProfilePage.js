import Categories from "./Categories";
import profile_avatar from "../images/profile_avatar_logo.png"
import cart_logo from "../images/cart_logo.png"
import { GlobalContext } from "./GlobalContext";
import { useContext, useState, useEffect} from "react";
import next_button from "../images/next_button.png";
import user_profile from "../images/user_profile.png";
import user_payments from "../images/user_payments.png";
import logout_logo from "../images/logout_logo.png";
import my_stuff_logo from "../images/my_stuff_logo.png";
import account_btm_banner from "../images/account_bottom_banner.png";

const ProfilePage=()=>{
    const {state,dispatch}=useContext(GlobalContext);
    let fname=state.userProfile?state.userProfile.name.split(" ")[0]:"";
    let lname=state.userProfile?state.userProfile.name.split(" ")[1]:"";
    let email=state.userProfile?state.userProfile.email:"";
    let mobile=state.userProfile?state.userProfile.mobile:"";
    const [profileDetails,setProfileDetails]=useState({
        profile_edit:false,
        profile_val_fname:fname,
        profile_val_lname:lname,
        profile_val_email:email,
        profile_val_mobile:mobile,
        email_edit:false,
        mobile_edit:false
        
    });
    return(
        <div>
            <Categories/>
            <div style={{width:"100%",height:"auto", backgroundColor:"#EEEEEE",display:"flex", gap:"2%",alignItems:"flex-start",justifyContent:"center",paddingTop:'20px',paddingBottom:'20px'}}>
                <div style={{display:"flex",flexDirection:"column",minWidth:"22%",height:"50%",backgroundColor:"#EEEEEE", gap:"20px"}}>
                    <div style={{backgroundColor:"#21325E",width:"100%",height:"auto",boxShadow:"5px 5px 8px #476072",display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"10px",padding:"10px",borderRadius:"5px"}}>
                        <div style={{width:"60px",height:"60px", display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <img width={"50px"} height={"50px"} src={profile_avatar} style={{borderRadius:"50%"}}/>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",color:"white"}}>
                            <div style={{fontSize:"0.8rem",marginBottom:"7px"}}>Hello,</div>
                            <div>{state.userProfile?state.userProfile.name:""}</div>
                        </div>     
                    </div>
                    <div style={{backgroundColor:"#21325E",width:"100%",height:"auto",boxShadow:"5px 5px 8px #476072",borderRadius:"5px"}}>
                        <div className="account-sub-sections" style={{display:"flex",justifyContent:"space-between",width:"100%",height:"50px"}}>
                            <div style={{display:"flex",justifyContent:"flex-start",color:"white",fontWeight:"lighter",alignItems:"center",gap:"10px",paddingLeft:"25px"}}>
                                <div><img style={{width:"30px"}} src={cart_logo}/></div>
                                <div>MY ORDERS</div>
                            </div>
                            <div style={{display:"flex",alignItems:"center"}}>
                                <img width={"30px"} src={next_button}/>
                            </div>
                        </div>
                        <div style={{width:"100%",height:"1px", backgroundColor:"grey"}}/>
                        <div className="" style={{display:"flex",justifyContent:"space-between",width:"100%",height:"50px"}}>
                            <div style={{display:"flex",justifyContent:"flex-start",color:"grey",fontWeight:"normal",alignItems:"center",gap:"10px",paddingLeft:"25px"}}>
                                <div><img style={{width:"30px"}} src={user_profile}/></div>
                                <div>ACCOUNT SETTINGS</div>
                            </div>
                            <div style={{display:"flex",visibility:"hidden",alignItems:"center"}}>
                                <img width={"30px"} src={next_button}/>
                            </div>
                        </div>
                        <div className="account-sub-sections" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"50px", color:"white"}}>
                            Profile Information
                        </div>
                        <div className="account-sub-sections" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"50px",color:"white"}}>
                            Manage Addresses
                        </div>
                        <div style={{width:"100%",height:"1px", backgroundColor:"grey"}}/>
                        <div className="account-sub-sections" style={{display:"flex",justifyContent:"space-between",width:"100%",height:"50px"}}>
                            <div style={{display:"flex",justifyContent:"flex-start",color:"white",fontWeight:"lighter",alignItems:"center",gap:"10px",paddingLeft:"25px"}}>
                                <div><img style={{width:"30px"}} src={user_payments}/></div>
                                <div>PAYMENTS</div>
                            </div>
                            <div style={{display:"flex",alignItems:"center"}}>
                                <img width={"30px"} src={next_button}/>
                            </div>
                        </div>
                        <div className="" style={{display:"flex",justifyContent:"space-between",width:"100%",height:"50px"}}>
                            <div style={{display:"flex",justifyContent:"flex-start",color:"grey",fontWeight:"normal",alignItems:"center",gap:"10px",paddingLeft:"25px"}}>
                                <div><img style={{width:"30px"}} src={my_stuff_logo}/></div>
                                <div>MY STUFF</div>
                            </div>
                            <div style={{display:"flex",visibility:"hidden",alignItems:"center"}}>
                                <img width={"30px"} src={next_button}/>
                            </div>
                        </div>
                        <div className="account-sub-sections" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"50px", color:"white"}}>
                            {"My Reviews & Ratings"}
                        </div>
                        <div className="account-sub-sections" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"50px",color:"white"}}>
                            All Notifications
                        </div>
                        <div className="account-sub-sections" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"50px",color:"white"}}>
                            My Wishlist
                        </div>
                        <div style={{width:"100%",height:"1px", backgroundColor:"grey"}}/>
                        <div className="account-sub-sections" style={{display:"flex",justifyContent:"space-between",width:"100%",height:"50px"}}>
                            <div style={{display:"flex",justifyContent:"flex-start",color:"white",fontWeight:"normal",alignItems:"center",gap:"10px",paddingLeft:"25px"}}>
                                <div><img style={{width:"30px"}} src={logout_logo}/></div>
                                <div>Logout</div>
                            </div>
                            <div style={{display:"flex",visibility:"hidden",alignItems:"center"}}>
                                <img width={"30px"} src={next_button}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",width:"65%",height:"auto", boxShadow:"3px 3px 5px grey"}}>
                    <form style={{minWidth:"65%",height:"50%", backgroundColor:"white",display:"flex",padding:"4%",flexDirection:"column",gap:"80px"}}>
                        <div className="form-personal-info" syle={{display:"flex",flexDirection:"column",gap:"10px"}}> 
                            <div style={{display:"flex",gap:"5%"}}>
                                <div style={{fontSize:"1.3rem",fontWeight:"bold"}}>Personal Information</div>
                                <div onClick={e=>{
                                    setProfileDetails({
                                        ...profileDetails,
                                        profile_edit:!profileDetails.profile_edit
                                    })
                                }} style={{color:"blue",cursor:"pointer"}}>{profileDetails.profile_edit?<p>Cancel</p>:<p>Edit</p>}</div>
                            </div>
                            <div style={{display:"flex",marginTop:"3%",gap:"2%"}}>
                                <input type="text" placeholder={profileDetails.profile_val_fname}/>
                                <input type="text" placeholder={profileDetails.profile_val_lname}/>
                                {profileDetails.profile_edit?<div style={{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#2874f0",color:"white",borderRadius:"3px"}}>SAVE</div>:""}
                            </div>
                            <div style={{display:"flex", flexDirection:"column",marginTop:"3%"}}>
                                <p>Your Gender</p>
                                <div style={{display:"flex",marginTop:"2%"}}>
                                    <div>
                                        <input type="radio" name="gender" value={""}/>
                                        <label>Male</label>
                                    </div>
                                    <div style={{marginLeft:"3%"}}>
                                        <input type="radio" name="gender"/>
                                        <label>Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-email-address" style={{display:"flex",flexDirection:"column"}}>
                            <div style={{display:"flex",gap:"5%"}}>
                                <div style={{fontSize:"1.3rem",fontWeight:"bold"}}>Email Address</div>
                                <div onClick={e=>{
                                    setProfileDetails({
                                        ...profileDetails,
                                        email_edit:!profileDetails.email_edit
                                    })
                                }} style={{color:"blue",cursor:"pointer"}}>{profileDetails.email_edit?<p>Cancel</p>:<p>Edit</p>}</div>
                            </div>
                            <div style={{display:"flex",marginTop:"3%",gap:"2%"}}>
                                <input type="text"/>
                                {profileDetails.email_edit?<div style={{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#2874f0",color:"white",borderRadius:"3px"}}>SAVE</div>:""}
                            </div>
                        </div>
                        <div className="form-mobile">
                            <div style={{display:"flex",gap:"5%"}}>
                                <div style={{fontSize:"1.3rem",fontWeight:"bold"}}>Mobile Number</div>
                                <div onClick={e=>{
                                    setProfileDetails({
                                        ...profileDetails,
                                        mobile_edit:!profileDetails.mobile_edit
                                    })
                                }} style={{color:"blue",cursor:"pointer"}}><p>Edit</p></div>
                            </div>
                            <div style={{display:"flex",marginTop:"3%",gap:"2%"}}>
                                <input type="text" placeholder={profileDetails.profile_val_mobile}/>
                                {profileDetails.mobile_edit?<div style={{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#2874f0",color:"white",borderRadius:"3px"}}>SAVE</div>:""}
                            </div>
                        </div>
                        <div style={{width:"",display:"flex",flexDirection:"column",}}>
                            <p><b>FAQs</b></p>
                            <p className="faq-sec-1"><b>What happens when I update my email address (or mobile number)?</b></p>
                            <p className="faq-sec">Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                            <p className="faq-sec"><b>When will my Flipkart account be updated with the new email address (or mobile number)?</b></p>
                            <p className="faq-sec">It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
                            <p className="faq-sec"><b>What happens to my existing Flipkart account when I update my email address (or mobile number)?</b></p>
                            <p className="faq-sec">Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
                            <p className="faq-sec"><b>Does my Seller account get affected when I update my email address?</b></p>
                            <p className="faq-sec">Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
                            
                        </div>
                        <div style={{color:"#2874f0"}} className="deactivate">
                            Deactivate Account
                        </div>
                    </form>
                    <div style={{width:"100%"}}>
                        <img style={{width:"inherit"}} src={account_btm_banner}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage;