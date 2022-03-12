
import './App.css';
import { Navbar } from './components/Navbar';
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

function App() {
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
              <Route path='cart' element={<CartPage/>}/>
              <Route path="profile" element={<ProfilePage/>}>
                <Route path="addresses" element={<ProfilePage/>}/>
                <Route path="wishlist" element={<ProfilePage/>}/>
              </Route>
              <Route path="orders" element={<Orders/>}/>
              <Route path="*" element={<div>Error</div>}/>
            </Route>
            <Route path="*" element={<div>Error</div>}/>
          </Routes>
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
