import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
