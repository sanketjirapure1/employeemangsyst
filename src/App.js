import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/editemployee/:id" element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
