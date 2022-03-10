import Categories from "./Categories";
import profile_avatar from "../images/profile_avatar_logo.png"
import cart_logo from "../images/cart_logo.png"
import { GlobalContext } from "./GlobalContext";
import { useNavigate,useLocation } from "react-router-dom";
import { useContext, useState, useEffect, createContext} from "react";
import next_button from "../images/next_button.png";
import user_profile from "../images/user_profile.png";
import user_payments from "../images/user_payments.png";
import logout_logo from "../images/logout_logo.png";
import my_stuff_logo from "../images/my_stuff_logo.png";
import account_btm_banner from "../images/account_bottom_banner.png";
import axios from "axios";
import Addresses from "./Addresses";
import Wishlist from "./Wishlist";
import { ProfileContext } from "./GlobalContext";

const ProfilePage=(props)=>{
    //console.log("ADDRESS-to",props.addr);
    const {state,dispatch}=useContext(GlobalContext);
    const [accountPage,setAccountPage]=useContext(ProfileContext)
    const location=useLocation();
    //console.log("URL",location.pathname);
    let email=state.userProfile?state.userProfile.email:"";
    let mobile=state.userProfile?state.userProfile.mobile:"";
    let gender=state.userProfile?state.userProfile.gender:"";
    const [profileDetails,setProfileDetails]=useState({
        profile_edit:false,
        profile_val_fname:state.userProfile?state.userProfile.name.split(" ")[0]:"",
        profile_val_lname:state.userProfile?state.userProfile.name.split(" ")[1]:"",
        //profile_val_name:profileDetails.profile_val_fname+" "+profileDetails.profile_val_fname,
        profile_val_email:email,
        profile_val_mobile:mobile,
        gender_val:gender,
        email_edit:false,
        mobile_edit:false
    });
    const [addAddressBttn, setAddAddressBttn]=useState(true);
    const [newAddress,setNewAddress]=useState("");
    
    useEffect(()=>{
        console.log(profileDetails);
        console.log("STATE",state);
        console.log(newAddress);
        console.log("WISHLIST",state.wishlist);
    },[profileDetails,accountPage,newAddress,state.addresses])
    const navigation=useNavigate();

    /*const addAddress=async ()=>{
        try{
            const user= await axios.post("http://localhost:4001/api/v1/users/add-address",{
                address:newAddress
            },{withCredentials:true})
            console.log(user.data.data);
            return user.data.data;
        }catch(err){
            console.log(err);
        }
    }*/
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
                        <div onClick={e=>navigation("/orders")} className="account-sub-sections" style={{display:"flex",justifyContent:"space-between",width:"100%",height:"50px"}}>
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
                        <div onClick={()=>{
                            setAccountPage("profile-info");
                            navigation("/profile");
                        }} className="account-sub-sections" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"50px", color:"white",backgroundColor:`${accountPage==="profile-info"?"#344CB7":"inherit"}`}}>
                            Profile Information
                        </div>
                        <div onClick={()=>{
                            setAccountPage("addresses-info");
                            navigation("/profile/addresses");
                            }} className="account-sub-sections" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"50px",color:"white",backgroundColor:`${accountPage==="addresses-info"?"#344CB7":"inherit"}`}}>
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
                        <div onClick={e=>{
                            setAccountPage("wishlist-info");
                            navigation("wishlist");
                            }} className="account-sub-sections" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"50px",color:"white"}}>
                            My Wishlist
                        </div>
                        <div style={{width:"100%",height:"1px", backgroundColor:"grey"}}/>
                        <div onClick={
                            async e=>{
                                dispatch({type:"logout"});
                                await axios.get("http://localhost:4001/api/v1/users/logout",{
                                    withCredentials:true
                                });
                                navigation("/");
                                window.location.reload();
                            }
                        } className="account-sub-sections" style={{display:"flex",justifyContent:"space-between",width:"100%",height:"50px"}}>
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
                    {accountPage==="profile-info"?
                    <form style={{minWidth:"65%",height:"auto", backgroundColor:"white",display:"flex",padding:"4%",flexDirection:"column",gap:"80px"}}>
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
                                <input defaultValue={profileDetails.profile_val_fname} type="text" disabled={profileDetails.profile_edit?false:true} onChange={e=>setProfileDetails({
                                    ...profileDetails,
                                    profile_val_fname:e.target.value
                                })} placeholder="First name..."/>
                                <input type="text" defaultValue={profileDetails.profile_val_lname} disabled={profileDetails.profile_edit?false:true} onChange={e=>setProfileDetails({
                                    ...profileDetails,
                                    profile_val_lname:e.target.value
                                })} placeholder="Last name..."/>
                                {profileDetails.profile_edit?<div onClick={
                                    async e=>{
                                        const user=await axios.patch("http://localhost:4001/api/v1/users/update-name",{
                                            name:profileDetails.profile_val_fname+" "+profileDetails.profile_val_lname,
                                            gender:profileDetails.gender_val
                                            
                                        },{ withCredentials:true});
                                        console.log(user);
                                        //dispatch({type:"change-name",payload:user.data})
                                        setProfileDetails({
                                            ...profileDetails,
                                            profile_edit:!profileDetails.profile_edit,
                                        });
                                        window.location.reload(true);
                                    }
                                } style={{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#2874f0",color:"white",borderRadius:"3px",cursor:"pointer"}}>SAVE</div>:""}
                            </div>
                            <div style={{display:"flex", flexDirection:"column",marginTop:"3%"}}>
                                <p>Your Gender</p>
                                <div style={{display:"flex",marginTop:"2%"}}>
                                    <div>
                                        <input checked={profileDetails.gender_val==="Male"?true:false} disabled={profileDetails.profile_edit?false:true} type="radio" name="gender" value="Male" onChange={e=>{
                                            setProfileDetails({
                                                ...profileDetails,
                                                gender_val:e.target.value
                                            })
                                        }}/>
                                        <label>Male</label>
                                    </div>
                                    <div style={{marginLeft:"3%"}}>
                                        <input checked={profileDetails.gender_val==="Female"?true:false} disabled={profileDetails.profile_edit?false:true} type="radio" name="gender" value="Female" onChange={e=>{
                                            setProfileDetails({
                                                ...profileDetails,
                                                gender_val:e.target.value
                                            })
                                        }}/>
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
                                <input onChange={
                                    e=>{
                                        setProfileDetails({
                                            ...profileDetails,
                                            profile_val_email:e.target.value
                                        })
                                    }
                                } type="text" disabled={profileDetails.email_edit?false:true} placeholder="Email address..."/>
                                {profileDetails.email_edit?<div onClick={
                                    async e=>{
                                        const user=await axios.patch("http://localhost:4001/api/v1/users/update-email",{
                                            email:profileDetails.profile_val_email
                                        },{ withCredentials:true});
                                        console.log(user);
                                        //dispatch({type:"change-name",payload:user.data})
                                        setProfileDetails({
                                            ...profileDetails,
                                            email_edit:!profileDetails.email_edit,
                                        });
                                        window.location.reload(true);
                                    }
                                } style={{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#2874f0",color:"white",borderRadius:"3px",cursor:"pointer"}}>SAVE</div>:""}
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
                                }} style={{colCancelor:"blue",cursor:"pointer"}}><p style={{color:"blue"}}>Edit</p></div>
                            </div>
                            <div style={{display:"flex",marginTop:"3%",gap:"2%"}}>
                                <input onChange={
                                    e=>{
                                        setProfileDetails({
                                            ...profileDetails,
                                            profile_val_mobile:e.target.value
                                        })
                                    }
                                } defaultValue={profileDetails.profile_val_mobile} type="text" placeholder="Mobile Number..." disabled={profileDetails.mobile_edit?false:true} />
                                {profileDetails.mobile_edit?<div onClick={
                                    async e=>{
                                        const user=await axios.patch("http://localhost:4001/api/v1/users/update-mobile",{
                                            mobile:profileDetails.profile_val_mobile
                                        },{ withCredentials:true});
                                        console.log(user);
                                        //dispatch({type:"change-name",payload:user.data})
                                        setProfileDetails({
                                            ...profileDetails,
                                            mobile_edit:!profileDetails.mobile_edit,
                                        });
                                        window.location.reload(true);
                                    }
                                } style={{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#2874f0",color:"white",borderRadius:"3px",cursor:"pointer"}}>SAVE</div>:""}
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
                    </form>:(
                    accountPage==="addresses-info"?
                    <div >
                        <form style={{minWidth:"65%",height:"auto", backgroundColor:"white",display:"flex",padding:"4%",flexDirection:"column",gap:"20px"}}>
                            <div style={{fontSize:"1.3rem", fontWeight:"bold"}}>Manage Addresses</div>
                            {addAddressBttn?<div onClick={e=>setAddAddressBttn((prev)=>!prev)} style={{display:"flex",justifyContent:"flex-start",alignItems:"center", color:"blue", borderWidth:"1px" ,borderColor:"grey", borderStyle:"solid", padding:"2%", fontSize:"1rem", cursor:"pointer"}}>
                                <div style={{marginRight:"3%",fontSize:"1.2rem"}}>+</div>
                                <div>ADD A NEW ADDRESS</div>
                            </div>:
                            <div>
                                <textarea style={{width:"100%",height:"5vmax", padding:"2%"}} onChange={e=>setNewAddress(e.target.value)} />
                                <div style={{display:"flex", justifyContent:"flex-start",gap:"2%",color:"white"}}>
                                    <div onClick={
                                        async e=>{
                                            //const user=await addAddress();
                                            await dispatch({type:"add-address",payload:newAddress});
                                            await dispatch({type:"add-address-to-DB"});
                                            navigation("/profile");
                                            window.location.reload(true);
                                        }
                                    } style={{width:"9vmax", padding:"2%", backgroundColor:"#2874f0",textAlign:"center",cursor:"pointer"}}>SAVE</div>
                                    <div onClick={e=>setAddAddressBttn((prev)=>!prev)} style={{width:"9vmax", padding:"2%",backgroundColor:"#fb7a1b",textAlign:"center",cursor:"pointer"}}>CANCEL</div>
                                </div>    
                            </div>
                            }   
                            {
                            state.userProfile && state.userProfile.addresses?
                            <div>
                                {state.userProfile.addresses.map((el,i)=>
                                    <Addresses key={i} element={el}/>
                                )}
                            </div>
                            :
                            <div>
                                Sorry, there are no addresses saved for you
                            </div>
                            }
                        </form>
                    </div>:
                    accountPage==="wishlist-info"?
                    <div>
                        <div style={{backgroundColor:"white",padding:"4%"}}>
                            <p style={{fontSize:"1.3rem", fontWeight:"bold"}}>My Wishlist</p>
                            {
                            state.wishlist.length?
                                <div style={{display:"flex",flexDirection:"column"}}>
                                {
                                    state.wishlist.map((el,i)=><Wishlist item={el} key={i}/>)
                                }    
                                </div>:
                                <div><p>Sorry, you dont have any items added to wishlist</p></div>
                                

                            }
                        </div>
                    </div>:
                    <div>
                        Last case
                    </div>
                    )}
                    <div style={{width:"100%"}}>
                        <img style={{width:"inherit"}} src={account_btm_banner}/>
                    </div>
                </div>   
            </div>
        </div>
    )
}
export default ProfilePage;