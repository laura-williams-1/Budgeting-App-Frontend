import "./App.css";
import Nav from "./Components/Nav";
import Transaction from "./Components/transaction";
import Index from "./Components/Index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default App;
