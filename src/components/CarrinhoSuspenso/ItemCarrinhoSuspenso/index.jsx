import Quantidade from "@/components/Quantidade";
import Botao from "@/components/Botao";
import ValorFormatado from "@/components/ValorFormatado";
import { useShoppingCartContext } from "@/hooks/useShoppingCart"

const ItemCarrinhoSuspenso = ({ shoppingCartItem }) => {
  const { removeProduct } = useShoppingCartContext()

  return (
    <li>
      <>
        <div className="produto">
          <img
            className="imagem__produto"
            src={shoppingCartItem.src}
            alt={shoppingCartItem.alt}
          />
          <div className="d-flex flex-column gap-3 w-100">
            <p className="fw-semibold fs-5 m-0">{shoppingCartItem.titulo}</p>
            <Quantidade shoppingCartItem={shoppingCartItem} />
            <ValorFormatado valor={shoppingCartItem.preco} />
          </div>
          <Botao
            variant="deleteItem"
            aria-label="Excluir"
            onClick={() => removeProduct(shoppingCartItem.id)}
          >
            delete_forever
          </Botao>
        </div>
        <div className="divisor my-5" />
      </>
    </li>
  );
};

export default ItemCarrinhoSuspenso;
