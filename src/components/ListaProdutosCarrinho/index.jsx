import React from "react";
import ItemCarrinhoSuspenso from "@/components/CarrinhoSuspenso/ItemCarrinhoSuspenso";
import ItemCarrinho from "@/components/ItemCarrinho";
import { useLocation } from "react-router-dom";

const ListaProdutosCarrinho = ({ shoppingCart }) => {
  const location = useLocation();
  return (
    <ul className="list-unstyled">
      {shoppingCart.length === 0 ? (
        <p className="text-center my-5">Não há produtos no carrinho</p>
      ) : (
        shoppingCart.map((shoppingCartItem) => {
          return location.pathname === "/carrinho" ? (
            <ItemCarrinho
              key={shoppingCartItem.id}
              shoppingCartItem={shoppingCartItem}
            />
          ) : (
            <ItemCarrinhoSuspenso
              key={shoppingCartItem.id}
              shoppingCartItem={shoppingCartItem}
            />
          );
        })
      )}
    </ul>
  );
};

export default ListaProdutosCarrinho;
