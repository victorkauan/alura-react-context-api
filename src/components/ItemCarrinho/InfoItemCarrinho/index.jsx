const InfoItemCarrinho = ({ shoppingCartItem }) => {
  return (
    <div className="mx-4 mx-md-2 text-center text-md-start descricao">
      <p className="fw-semibold fs-4">{shoppingCartItem.titulo}</p>
      <p className="m-0">{shoppingCartItem.descricao}</p>
    </div>
  );
};

export default InfoItemCarrinho;
