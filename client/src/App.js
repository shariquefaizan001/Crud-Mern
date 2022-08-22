import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Details from "./Components/Details";
import './App.css';
import Protected from "./Components/Protected";
import Edit from "./Components/Edit";
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Protected Component={Home} />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/view/:id' element={<Details />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;

































// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import Home from "./Components/Home";
// import Login from "./Components/Login";
// import Register from "./Components/Register";
// import Details from "./Components/Details";
// import './App.css';
// import Pro from "./Components/Pro";
// import Protected from "./Components/Login";
// import Edit from "./Components/Edit";
// // import Navbar from "./Components/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// // import Homeopagenavbar from "./Components/Homepagenavbar";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         {/* <Navbar/> */}
//         <Routes>

//           <Route path='/' element={<Login />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/home' element={<Home />} />
//           <Route path='/edit/:id' element={<Edit />} />
//           <Route path='/view/:id' element={<Details />} />
//           <Route path='/pro' element={<Pro />} />

//         </Routes>

//       </BrowserRouter>

//       {/* <Navbar/> */}
//       {/* <Home/>
//  <Register/> */}
//     </>
//   );
// }

// export default App;
