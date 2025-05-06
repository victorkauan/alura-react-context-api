import Produto from "./Produto";
import produtos from "@/mocks/produtos.json";
import Titulo from "@/components/Titulo";
import { useShoppingCartContext } from "@/hooks/useShoppingCart";

const Produtos = () => {
  const { addProduct } = useShoppingCartContext()

  return (
    <section role="produtos" aria-label="Produtos que estão bombando!">
      <Titulo>Produtos que estão bombando!</Titulo>
      <div className="container row mx-auto">
        {produtos.map((produto) => (
          <Produto key={produto.id} addProduct={addProduct} {...produto} />
        ))}
      </div>
    </section>
  );
};

export default Produtos;
