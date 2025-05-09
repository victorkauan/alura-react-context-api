import React from "react";
import BarraNavegacao from "@/components/BarraNavegacao";
import Titulo from "@/components/Titulo";
import Sumario from "@/components/Sumario";
import ListaProdutosCarrinho from "@/components/ListaProdutosCarrinho";
import BannerCarrinho from "@/components/BannerCarrinho";
import { useShoppingCartContext } from "@/hooks/useShoppingCart"

const Carrinho = () => {
  const { shoppingCart, totalValue, quantity } = useShoppingCartContext()

  return (
    <>
      <BarraNavegacao />
      <BannerCarrinho />
      <main className="container-xxl">
        <Titulo element="h1" className="text-center fw-semibold my-3 my-md-5">
          Carrinho de Compras
        </Titulo>
        <section className="secao__compra text-light mx-md-4 mx-xl-4">
          <div className="conteudo mb-5">
            <div className="detalhe__compra bg-black p-4">
              <Titulo className="text-center fw-bold mb-3 text-md-start">
                Detalhes da compra
              </Titulo>
              <ListaProdutosCarrinho shoppingCart={shoppingCart} />
            </div>
            <Sumario totalValue={totalValue} quantity={quantity} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Carrinho;
