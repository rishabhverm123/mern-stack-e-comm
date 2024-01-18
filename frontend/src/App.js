
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Nav} from './component/Header/Nav'
import { Footer } from './component/Footer/Footer';
import { Signup } from './component/SignUp/Signup';


function App() {
  return (
    <div className="App">

      <Signup />

      {/* <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Product page</h1>}></Route>
        <Route path="/add" element={<h1>Add Product page</h1>}></Route>
        <Route path="/update" element={<h1>Update Product page</h1>}></Route>
        <Route path="/logout" element={<h1>Logout page</h1>}></Route>
        <Route path="/profile" element={<h1>Profile page</h1>}></Route>
      </Routes>
      </BrowserRouter> */}
      
      <Footer />
       
    </div>
  );
}

export default App;
