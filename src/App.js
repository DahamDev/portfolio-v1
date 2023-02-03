import './App.css';
import { NavBar, Footer } from './components';
import {Home} from "./pages"
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutme' element={<p>aboutme</p>}></Route>
          <Route path="/404" element={<div>Choose the correct path </div>} />
          <Route path="*" element={<Navigate replace to="/404" />} />

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
