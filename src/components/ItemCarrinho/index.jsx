import React from "react";
import Botao from "@/components/Botao";
import Quantidade from "@/components/Quantidade";
import ValorFormatado from "@/components/ValorFormatado";
import InfoItemCarrinho from "./InfoItemCarrinho";

const ItemCarrinho = ({ shoppingCartItem }) => {
  return (
    <li key={shoppingCartItem.id}>
      <>
        <div className="produto">
          <img
            className="imagem__produto"
            src={shoppingCartItem.src}
            alt={shoppingCartItem.alt}
          />
          <InfoItemCarrinho shoppingCartItem={shoppingCartItem} />
          <ValorFormatado valor={shoppingCartItem.preco} />
          <Quantidade shoppingCartItem={shoppingCartItem} />
          <Botao
            variant="deleteItem"
            aria-label="Excluir"
            handleClick={() => removerProdutoCarrinho(shoppingCartItem.id)}
          >
            delete_forever
          </Botao>
        </div>
        <div className="divisor my-5" />
      </>
    </li>
  );
};

export default ItemCarrinho;
