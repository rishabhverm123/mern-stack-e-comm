
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Signup } from './component/SignUp/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './component/Login/Login';
import { Protected } from './component/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
      <Routes>

        <Route path="/Register" element={ <Signup />}></Route>
        <Route path="/login" element={ <Login />}></Route>
        <Route path="/" element={<Protected />}>
        <Route path="/" element={<h1>Product page</h1>}></Route>
       
        <Route path="/add" element={<h1>Add Product page</h1>}></Route>
        <Route path="/update" element={<h1>Update Product page</h1>}></Route>
        <Route path="/logout" element={<h1>Logout page</h1>}></Route>
        <Route path="/profile" element={<h1>Profile page</h1>}></Route>
        </Route>

      </Routes>
      </BrowserRouter>
      

       
    </div>
  );
}

export default App;
