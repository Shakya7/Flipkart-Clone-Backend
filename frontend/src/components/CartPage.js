import { useEffect,useContext, useState } from "react";
import CartAmount from "./CartAmount";
import CartProducts from "./CartProducts";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import PaymentDoneModal from "./modals/PaymentDoneModal";
 
const CartPage=(props)=>{
    const {state,dispatch}=useContext(GlobalContext);
    const [paymentSt,setPaymentSt]=useState(false);
    const initPayment = (data) => {
		const options = {
			key: "rzp_test_qUJmI8cKYQn0s3",
			amount: data.price,
			currency: data.currency,
			name: "Total Amount",
			description: "Subtotal amount",
			//image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:4001/api/v1/payment/verify";
          			console.log("HELOoooOOOooo")
					await axios.post(verifyUrl, response,{withCredentials:true})
					.then(async function (res){
						console.log(res.data);
						/*<GlobalContext.Consumer>
						{async({state,dispatch})=>{
							console.log(state);
							await dispatch({type:"random",payload:"Random text"});
						}}	
						</GlobalContext.Consumer>*/
                        //await dispatch({type:"random",payload:"Random text"});
                        setPaymentSt(true);
					})
					.catch(function (err){
						console.log(err.message);
					})
					//console.log("FINAL DATA",data.status);

					//if(data.status==="success")
						//console.log("ZYX");
				} catch (error) {
					console.log("LETS SEE IF WE CAN GET SOME ERROR ",error.message);
          			console.log("HMM I GUESS IT'll NOT REACH HERE");
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async (val) => {
		try {
			console.log("TOTAL PRICE -->",val);
			const orderUrl = "http://localhost:4001/api/v1/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: val*1 },{withCredentials:true});
			//console.log("First console",data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
      		console.log("Lets see if here the error is coming from --> handlePayment func of App.js")
		}
	};

    useEffect(()=>{
        console.log("CARTPAGE---> STATE IS :",state);
        if(!state.isLoggedIn){
            dispatch({type:"show-cart-disable"});
        }
        else
            dispatch({type:"show-cart-enable"});
    },[state.showCart,state.isLoggedIn,state.random]);
    return(
        <div style={{backgroundColor:"#EEEEEE", display:"flex", height:"auto", padding:"20px", justifyContent:"space-between"}}>
            <CartProducts/>
            {state.cart!==0?<CartAmount handleP={handlePayment}/>:""}
            {
            paymentSt?<PaymentDoneModal val={paymentSt} closeModal={setPaymentSt}/>:""
            }
        </div>
        
    )
}
export default CartPage;