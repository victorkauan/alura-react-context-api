const CarrosselControl = ({ variant }) => {
  return (
    <button
      className={`carousel-control-${variant}`}
      type="button"
      data-bs-target="#carrossel"
      data-bs-slide={variant}
    >
      <span
        className={`carousel-control-${variant}-icon`}
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">
        {variant === "prev" ? "Anterior" : "Próximo"}
      </span>
    </button>
  );
};

export default CarrosselControl;
