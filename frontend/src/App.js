import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/navbar.js";
import Home from "./pages/Home.js"
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar />
     <div className="pages">
       <Routes>
         <Route
           path="/"
           element={<Home />}
         />
       </Routes>
     </div>
     <Routes>
       <Route
       path="/login"
       element={<Login />}
       />
     </Routes>
     <Routes>
     <Route
       path="/signup"
       element={<Signup />}
       />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
