import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import {CartProvider} from "./components/ContextReducer";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Cart from "./screens/Cart";
import MyOrder from "./screens/MyOrders";


function App() {
  return (
    <CartProvider>
      <Router>
        <div >
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/createuser" element={<SignUp/>}/>
            <Route exact path="/Cart" element={<Cart/>}/>
            <Route exact path="/myorder" element={<MyOrder/>}/>

          </Routes>
        </div> 
      </Router>
    </CartProvider>
  );
}

export default App;
