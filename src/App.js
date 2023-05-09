import "./App.css";
import Nav from "./Components/Nav";
import Transaction from "./Components/Transaction";
import Index from "./Components/HomePage/Index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/transactions" element={<Index />} />

        <Route path="/transactions/:id" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default App;
