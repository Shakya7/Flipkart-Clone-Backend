import './App.css';
import { Navbar } from './components/Navbar';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemsPage from './components/ItemsPage';
import CartPage from './components/CartPage';
import { SingleItemPage } from './components/SingleItemPage';
import { GlobalProvider } from './components/GlobalContext';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProfilePage from './components/ProfilePage';
import Orders from './components/Orders';
import { ResetPass } from './components/ResetPassword';
import { PageNotFoundError } from './components/error-UI/PageNotFoundError';
import { _500ServerError } from './components/error-UI/_500ServerError';
import axios from "axios";

function App() {
  const [book, setBook] = useState({
		name: "The Fault In Our Stars",
		author: "John Green",
		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
		price: 250,
	});
  const [paymentSt,setPaymentSt]=useState(false);

	const initPayment = (data) => {
		const options = {
			key: "rzp_test_qUJmI8cKYQn0s3",
			amount: data.amount,
			currency: data.currency,
			name: "Total Amount",
			description: "Subtotal amount",
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:4001/api/v1/payment/verify";
          			console.log("HELOoooOOOooo")
					const {data} = await axios.post(verifyUrl, response,{withCredentials:true});
					console.log(data);
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

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:4001/api/v1/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: book.price },{withCredentials:true});
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
      console.log("Lets see if here the error is coming from --> handlePayment func of App.js")
		}
	};
  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navbar/>}>
              <Route index element={<ItemsPage/>}/>
              <Route path=":id" element={<SingleItemPage/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="resetPassword/:token" element={<ResetPass/>}/>
              <Route path="signup" element={<SignUp/>}/>
              <Route path='cart' element={<CartPage paymentHandler={handlePayment}/>}/>
              <Route path="profile" element={<ProfilePage/>}>
                <Route path="addresses" element={<ProfilePage/>}/>
                <Route path="wishlist" element={<ProfilePage/>}/>
              </Route>
              <Route path="orders" element={<Orders/>}/>
              <Route path="*" element={<PageNotFoundError/>}/>
            </Route>
            <Route path="*" element={<_500ServerError/>} />
          </Routes>
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
