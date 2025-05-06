const Facilidade = ({ src, alt, title, description }) => {
  return (
    <div className="divs-facilidades d-flex">
      <img className="verde-limao bi bi-x-diamond fs-1" src={src} alt={alt} />
      <div>
        <h5 className="ms-3 mb-1 verde-limao">{title}</h5>
        <p className="texto-menor ms-3">{description}</p>
      </div>
    </div>
  );
};

export default Facilidade;
