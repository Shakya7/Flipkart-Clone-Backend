
import './App.css';
import { Navbar } from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemsPage from './components/ItemsPage';
import Cart from './components/Cart';
import { SingleItemPage } from './components/SingleItemPage';
import { GlobalProvider } from './components/GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navbar/>}>
              <Route index element={<ItemsPage/>}/>
              <Route path=":id" element={<SingleItemPage/>}/>
              <Route path='cart' element={<Cart/>}/>
            </Route>
            <Route path="*" element={<div>Error</div>}/>
          </Routes>
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
