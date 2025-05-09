import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Carrinho from "@/pages/Carrinho";
import PaginaErro from "@/pages/PaginaErro";
import { ShoppingCartProvider } from '@/contexts/ShoppingCartContext'

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

