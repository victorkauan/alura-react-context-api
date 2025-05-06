import { formatadorMoeda } from "@/utils/formatadorMoeda";

const ValorFormatado = ({ value }) => {
  return (
    <span
      className="verde-limao text-center text-md-start fw-bold fs-5"
      aria-label="Valor do produto"
    >
      {formatadorMoeda(value)}
    </span>
  );
};

export default ValorFormatado;
