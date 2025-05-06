const InfoItemCarrinho = ({ shoppingCartItem }) => {
  return (
    <div className="mx-4 mx-md-2 text-center text-md-start description">
      <p className="fw-semibold fs-4">{shoppingCartItem.title}</p>
      <p className="m-0">{shoppingCartItem.description}</p>
    </div>
  );
};

export default InfoItemCarrinho;
