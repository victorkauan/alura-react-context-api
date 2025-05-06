import Botao from "@/components/Botao";
import { formatadorMoeda } from "@/utils/formatadorMoeda";

const Produto = ({
  src,
  id,
  alt,
  title,
  description,
  price,
  addProduct,
}) => {
  return (
    <div className="col-12 col-md-6 col-xxl-4 pb-4">
      <div className="card">
        <img className="img-fluid" src={src} alt={alt} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="fw-bold">{formatadorMoeda(price)}</p>

          <Botao
            variant="primary"
            type="button"
            className="border-0"
            handleClick={() =>
              addProduct({ src, alt, id, title, description, price })
            }
          >
            Adicionar ao carrinho
          </Botao>
        </div>
      </div>
    </div>
  );
};

export default Produto;
