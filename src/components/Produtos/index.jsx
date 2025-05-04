import { useContext } from "react";
import Produto from "./Produto";
import produtos from "@/mocks/produtos.json";
import Titulo from "@/components/Titulo";
import {ShoppingCartContext} from "@/contexts/ShoppingCartContext";

const Produtos = () => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext)

  function addProduct(newProduct) {
    const hasProduct = shoppingCart.some((product) => product.id === newProduct.id)

    if (!hasProduct) {
      newProduct.quantidade = 1
      return setShoppingCart(previous => [...previous, newProduct])
    }

    setShoppingCart(previous => previous.map(product => {
      if (product.id === newProduct.id) {
        product.quantidade++
      }

      return product
    }))
  }

  return (
    <section role="produtos" aria-label="Produtos que estão bombando!">
      <Titulo>Produtos que estão bombando!</Titulo>
      <div className="container row mx-auto">
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            {...produto}
            addProduct={addProduct}
          />
        ))}
      </div>
    </section>
  );
};

export default Produtos;
