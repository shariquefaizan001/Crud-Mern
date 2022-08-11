import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Details from "./Components/Details";
import './App.css';
import Edit from "./Components/Edit";
import Navbar from "./Components/Navbar";
import {BrowserRouter,Route,Routes} from "react-router-dom"
 
function App() {
  return (
   <>


<BrowserRouter>
{/* <Navbar/> */}
        <Routes>
          
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/edit/:id' element={<Edit/>} />
          <Route path='/view/:id' element={<Details/>} />
          {/* <Route path='/Thirdpage'   element={<Pages/>} />/ */}
          {/* <Route path='/Fourthpage' element={<Fourthpage/>} />/ */}
          
          {/* <Route path='/preview' element={<Preview/>}></Route> */}

        </Routes> 

      </BrowserRouter>



 {/* <Navbar/> */}
 {/* <Home/>
 <Register/> */}
  </>
  );
}

export default App;
