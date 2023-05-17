import './App.css';
import './fonts/Raleway-VariableFont_wght.ttf';
import './fonts/Roboto-Black.ttf'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
