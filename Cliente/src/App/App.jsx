import { Home, Detail, Form, Landing } from "../Views/Index"
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/create' element={<Form/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>

    </div>
  )
}

export default App
