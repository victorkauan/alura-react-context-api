const Categoria = ({ alt, src, description }) => {
  return (
    <div className="col-6 col-md-4 col-xxl-2">
      <div className="card rounded-0 border-0">
        <img className="img-fluid" src={src} alt={alt} />
        <div className="card-header bg-black text-bg-dark">
          <p className="text-center card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Categoria;
