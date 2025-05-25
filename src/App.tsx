import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Book } from "./pages/Book";
import { Client } from "./pages/Client";
import { Loan } from "./pages/Loan";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/book" element={<Book />} />
      <Route path="/client" element={<Client />} />
      <Route path="/loan" element={<Loan />} />
    </Routes>
  )
}
